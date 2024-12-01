// User Selection
function selectUser(name) {
    userStore.set({ username: name });
    document.getElementById('userSelectModal').style.display = 'none';
}

// Check if user is selected
function checkUser() {
    const user = userStore.get();
    if (!user || !user.username) {
        document.getElementById('userSelectModal').style.display = 'flex';
    } else {
        document.getElementById('userSelectModal').style.display = 'none';
    }
}

// Diary Functionality
function addDiaryEntry(content) {
    const user = userStore.get();
    if (!user || !user.username) return;

    const diary = diaryStore.get() || { entries: [] };
    diary.entries.unshift({
        id: Date.now().toString(),
        author: user.username,
        content: content,
        date: new Date().toLocaleString()
    });
    diaryStore.set(diary);
    renderDiaryEntries();
}

function renderDiaryEntries() {
    const diary = diaryStore.get() || { entries: [] };
    const entriesList = document.getElementById('entriesList');
    entriesList.innerHTML = diary.entries.map(entry => `
        <div class="diary-entry fade-in">
            <div class="entry-header">
                <span>${entry.author}</span>
                <span>${entry.date}</span>
            </div>
            <p>${entry.content}</p>
        </div>
    `).join('');
}

// Message Toggle
function toggleMessage() {
    const message = document.getElementById('specialMessage');
    message.classList.toggle('hidden');
}

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    checkUser();
    renderDiaryEntries();

    const diaryForm = document.getElementById('diaryForm');
    diaryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('diaryEntry');
        const content = input.value.trim();
        if (content) {
            addDiaryEntry(content);
            input.value = '';
        }
    });
});