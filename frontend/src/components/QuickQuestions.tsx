import React from 'react';

const QQ_ITEMS = [
  { q: "Tell me about Mayar's work experience", icon: '💼', iconClass: 'b', text: 'Work Experience' },
  { q: "What are Mayar's technical skills?", icon: '⚙️', iconClass: 'p', text: 'Tech Skills' },
  { q: "Tell me about Mayar's projects", icon: '🚀', iconClass: 'g', text: 'Key Projects' },
  { q: "What is Mayar's education background?", icon: '🎓', iconClass: 'o', text: 'Education' },
  { q: "What backend stack does Mayar use?", icon: '🛠', iconClass: 'b', text: 'Backend Stack' },
  { q: "What cloud technologies does Mayar know?", icon: '☁️', iconClass: 'o', text: 'Cloud & DevOps' },
  { q: 'Why should I hire Mayar?', icon: '🌟', iconClass: 'g', text: 'Why Hire Me?' },
  { q: 'How can I contact Mayar?', icon: '📬', iconClass: 'p', text: 'Contact Me' },
];

interface QuickQuestionsProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

export default function QuickQuestions({ onSelect, disabled = false }: QuickQuestionsProps) {
  return (
    <div className="qq-section">
      <div className="section-label">Quick Questions</div>
      <div className="qq-grid">
        {QQ_ITEMS.map((item) => (
          <button
            key={item.q}
            type="button"
            className="qq-btn"
            onClick={() => onSelect(item.q)}
            disabled={disabled}
          >
            <div className={`qq-icon ${item.iconClass}`}>{item.icon}</div>
            <div className="qq-text">{item.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
