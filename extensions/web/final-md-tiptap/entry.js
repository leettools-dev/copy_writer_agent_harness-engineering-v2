export default {
  app_id: 'final-md-tiptap',
  mount(ctx, container) {
    const app = document.createElement('div');
    app.style.padding = '16px';
    app.style.height = '100%';
    app.style.boxSizing = 'border-box';

    const header = document.createElement('h2');
    header.textContent = 'Final Document (Tiptap)';
    app.appendChild(header);

    const textarea = document.createElement('textarea');
    textarea.style.width = '100%';
    textarea.style.height = 'calc(100% - 80px)';
    textarea.readOnly = true;
    app.appendChild(textarea);

    const loadBtn = document.createElement('button');
    loadBtn.textContent = 'Load final_document.md';
    loadBtn.onclick = async () => {
      const res = await fetch('/api/fs/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: 'document/compiled/final_document.md' })
      });
      if (res.ok) {
        const data = await res.json();
        textarea.value = data.content || 'No content';
      } else {
        textarea.value = 'Error loading file';
      }
    };
    app.appendChild(loadBtn);

    container.appendChild(app);
  },
  unmount() {}
};
