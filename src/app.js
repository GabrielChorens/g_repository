export class CourseApp {
    constructor(config, courses) {
        this.config = config;
        this.courses = courses;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        document.title = this.config.courseTitle;
        this.renderSidebar();
        this.renderCourse(this.currentIndex);
    }

    renderSidebar() {
        const sidebarList = document.getElementById('sidebarList');
        sidebarList.innerHTML = '';
        this.courses.forEach((course, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" class="${idx === this.currentIndex ? 'active' : ''}" onclick="app.goToCourse(${idx});return false;">${course.title}</a>`;
            sidebarList.appendChild(li);
        });
    }

    renderCourse(idx) {
        const course = this.courses[idx];
        document.getElementById('courseTitle').textContent = course.title;
        this.renderVideo(course.videoId);
        this.renderNotes(course.notes);
        this.updateNavigation(idx);
    }

    renderVideo(videoId) {
        document.getElementById('videoFrame').innerHTML =
            `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    }

    renderNotes(notes) {
        const notesSection = document.getElementById('notesSection');
        notesSection.innerHTML = '<strong>Notas:</strong>';

        if (!notes || notes.length === 0) {
            notesSection.innerHTML += '<p><em>Este curso no tiene notas disponibles.</em></p>';
            return;
        }

        notes.forEach(note => this.renderNote(note, notesSection));
    }

    renderNote(note, container) {
        switch (note.type) {
            case 'subtitle':
                container.innerHTML += `<div class="note-subtitle">${note.content}</div>`;
                break;
            case 'text':
                container.innerHTML += `<p>${note.content}</p>`;
                break;
            case 'link':
                container.innerHTML += `<p><a href="${note.content}" target="_blank">${note.content}</a></p>`;
                break;
            case 'named_link':
                container.innerHTML += `<p><a href="${note.url}" target="_blank" class="note-named-link">${note.text}</a></p>`;
                break;
            case 'image':
                container.innerHTML += `<img src="${note.content}" alt="Imagen" style="max-width:100%;margin:1em 0;">`;
                break;
            case 'code':
                container.innerHTML += this.renderCodeBlock(note.content);
                break;
        }
    }

    renderCodeBlock(code) {
        return `
            <div class="code-block-container">
                <pre><code>${code}</code></pre>
            </div>
        `;
    }

    updateNavigation(idx) {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        prevBtn.textContent = idx === 0 ? '🏠 Home' : '← Anterior';
        nextBtn.textContent = idx === this.courses.length - 1 ? '🏠 Home' : 'Siguiente →';
        prevBtn.onclick = () => idx === 0 ? this.goHome() : this.goToCourse(idx - 1);
        nextBtn.onclick = () => idx === this.courses.length - 1 ? this.goHome() : this.goToCourse(idx + 1);
    }

    goToCourse(idx) {
        this.currentIndex = idx;
        this.renderSidebar();
        this.renderCourse(idx);
    }

    goHome() {
        window.location.href = '../index.html';
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('¡Código copiado!');
        });
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 1800);
    }
}
// window.app = new CourseApp(); // Eliminado para evitar doble inicialización 