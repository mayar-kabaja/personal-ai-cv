import React from 'react';

/**
 * Renders AI message content with simple markdown: ## ### #### **bold** - bullets
 */
export default function MessageContent({ content, className = '' }: { content: string; className?: string }) {
  const lines = content.split('\n');
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push(
        <ul key={key++} className="md-list">
          {listItems.map((text, i) => (
            <li key={i}>{inlineFormat(text)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const URL_REGEX = /(https?:\/\/[^\s]+)/g;

  function inlineFormat(text: string) {
    const parts: React.ReactNode[] = [];
    const segments = text.split(URL_REGEX);
    let key = 0;
    segments.forEach((segment, i) => {
      if (i % 2 === 1) {
        parts.push(
          <a
            key={key++}
            href={segment}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-link"
          >
            {segment}
          </a>
        );
      } else {
        parts.push(<span key={key++}>{formatBold(segment)}</span>);
      }
    });
    return <>{parts}</>;
  }

  function formatBold(text: string) {
    const parts: React.ReactNode[] = [];
    let rest = text;
    let idx = 0;
    while (rest.length > 0) {
      const bold = rest.match(/\*\*(.+?)\*\*/);
      if (bold && rest.indexOf(bold[0]) === 0) {
        parts.push(<strong key={idx++}>{bold[1]}</strong>);
        rest = rest.slice(bold[0].length);
      } else {
        const i = rest.indexOf('**');
        if (i === -1) {
          parts.push(rest);
          break;
        }
        parts.push(rest.slice(0, i));
        rest = rest.slice(i);
      }
    }
    return <>{parts}</>;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed.startsWith('#### ')) {
      flushList();
      nodes.push(
        <h4 key={key++} className="md-h4">
          {inlineFormat(trimmed.slice(5))}
        </h4>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList();
      nodes.push(
        <h3 key={key++} className="md-h3">
          {inlineFormat(trimmed.slice(4))}
        </h3>
      );
    } else if (trimmed.startsWith('## ')) {
      flushList();
      nodes.push(
        <h2 key={key++} className="md-h2">
          {inlineFormat(trimmed.slice(3))}
        </h2>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      listItems.push(trimmed.slice(2));
    } else if (trimmed === '') {
      flushList();
      nodes.push(<br key={key++} />);
    } else {
      flushList();
      nodes.push(
        <p key={key++} className="md-p">
          {inlineFormat(trimmed)}
        </p>
      );
    }
  }
  flushList();

  return <div className={`bubble-content ${className}`.trim()}>{nodes}</div>;
}
