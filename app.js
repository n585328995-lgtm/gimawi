/* ==========================================================================
   Logic and Interaction Controller for FitTrack "حديد" Web App
   ========================================================================== */

// 1. Workout Routine Data
const WORKOUT_DATA = {
    1: {
        title: "اليوم الأول: الصدر + الترايسبس",
        isRest: false,
        exercises: [
            { id: "d1-e1", nameAr: "بنش برس بالبار (Barbell Bench Press)", nameEn: "Barbell Bench Press", target: "الصدر", sets: 4, repsRange: "6–8" },
            { id: "d1-e2", nameAr: "بنش مائل بالدامبل", nameEn: "Incline Dumbbell Press", target: "الصدر", sets: 3, repsRange: "8–10" },
            { id: "d1-e3", nameAr: "جهاز Chest Press", nameEn: "Chest Press Machine", target: "الصدر", sets: 3, repsRange: "10–12" },
            { id: "d1-e4", nameAr: "تفتيح بالكابل (Cable Fly)", nameEn: "Cable Fly", target: "الصدر", sets: 3, repsRange: "12–15" },
            { id: "d1-e5", nameAr: "Triceps Pushdown (حبل/مسطرة)", nameEn: "Triceps Pushdown", target: "الترايسبس", sets: 3, repsRange: "10–12" },
            { id: "d1-e6", nameAr: "Overhead Cable Extension", nameEn: "Overhead Cable Extension", target: "الترايسبس", sets: 3, repsRange: "10–12" },
            { id: "d1-e7", nameAr: "Dips (أو جهاز المتوازي)", nameEn: "Dips", target: "الترايسبس", sets: 3, repsRange: "8–12" }
        ],
        cardio: "10–15 دقيقة كارديو خفيف."
    },
    2: {
        title: "اليوم الثاني: الظهر + البايسبس",
        isRest: false,
        exercises: [
            { id: "d2-e1", nameAr: "Deadlift (اختياري لتقوية الظهر السفلي)", nameEn: "Deadlift", target: "الظهر السفلي", sets: 3, repsRange: "5" },
            { id: "d2-e2", nameAr: "Lat Pulldown (سحب واسع)", nameEn: "Lat Pulldown", target: "الظهر العلوي", sets: 4, repsRange: "8–12" },
            { id: "d2-e3", nameAr: "Barbell Row (تجديف بالبار)", nameEn: "Barbell Row", target: "الظهر العلوي", sets: 3, repsRange: "8–10" },
            { id: "d2-e4", nameAr: "Seated Cable Row (سحب أرضي)", nameEn: "Seated Cable Row", target: "الظهر", sets: 3, repsRange: "10–12" },
            { id: "d2-e5", nameAr: "Face Pull (للكتف الخلفي)", nameEn: "Face Pull", target: "الأكتاف الخلفية", sets: 3, repsRange: "12–15" },
            { id: "d2-e6", nameAr: "Barbell Curl (تبادل بالبار)", nameEn: "Barbell Curl", target: "البايسبس", sets: 3, repsRange: "8–10" },
            { id: "d2-e7", nameAr: "Incline Dumbbell Curl (تبادل مائل)", nameEn: "Incline Dumbbell Curl", target: "البايسبس", sets: 3, repsRange: "10–12" },
            { id: "d2-e8", nameAr: "Hammer Curl (تبادل شاكوش)", nameEn: "Hammer Curl", target: "البايسبس / الساعد", sets: 3, repsRange: "10–12" },
            { id: "d2-e9", nameAr: "Plank (تمرين بلانك)", nameEn: "Plank", target: "البطن / الكور", sets: 3, repsRange: "45–60 ثانية" },
            { id: "d2-e10", nameAr: "Hanging Leg Raise (رفع الأرجل معلقاً)", nameEn: "Hanging Leg Raise", target: "البطن السفلي", sets: 3, repsRange: "12" }
        ]
    },
    3: {
        title: "اليوم الثالث: راحة أو مشي 30 دقيقة",
        isRest: true,
        description: "اليوم مخصص للتعافي العضلي الكامل وإعطاء جسدك قسطاً من الراحة. ينصح بالقيام بمشي خفيف ونشط لمدة 30 دقيقة لتنشيط الدورة الدموية والمساعدة في سرعة التعافي العضلي واستشفاء المفاصل."
    },
    4: {
        title: "اليوم الرابع: الأرجل + البطن",
        isRest: false,
        exercises: [
            { id: "d4-e1", nameAr: "Squat (سكوات بالبار)", nameEn: "Barbell Squat", target: "الأرجل (الرباعية)", sets: 4, repsRange: "6–8" },
            { id: "d4-e2", nameAr: "Leg Press (جهاز دفع أرجل)", nameEn: "Leg Press", target: "الأرجل", sets: 3, repsRange: "10–12" },
            { id: "d4-e3", nameAr: "Romanian Deadlift (روماني بالبار)", nameEn: "Romanian Deadlift", target: "الخلفيات / الأرداف", sets: 3, repsRange: "8–10" },
            { id: "d4-e4", nameAr: "Leg Extension (جهاز الرفرفة الأمامي)", nameEn: "Leg Extension", target: "الأرجل (الرباعية)", sets: 3, repsRange: "12–15" },
            { id: "d4-e5", nameAr: "Leg Curl (جهاز الرفرفة الخلفي)", nameEn: "Leg Curl", target: "الأرجل الخلفية", sets: 3, repsRange: "12–15" },
            { id: "d4-e6", nameAr: "Standing Calf Raise (جهاز السمانة واقفاً)", nameEn: "Standing Calf Raise", target: "السمانة", sets: 4, repsRange: "15–20" },
            { id: "d4-e7", nameAr: "Seated Calf Raise (جهاز السمانة جالساً)", nameEn: "Seated Calf Raise", target: "السمانة", sets: 3, repsRange: "15–20" },
            { id: "d4-e8", nameAr: "Cable Crunch (طحن المعدة بالكابل)", nameEn: "Cable Crunch", target: "البطن العلوي", sets: 3, repsRange: "15" }
        ]
    },
    5: {
        title: "اليوم الخامس: الأكتاف + الذراعين",
        isRest: false,
        exercises: [
            { id: "d5-e1", nameAr: "Overhead Press (ضغط أكتاف بالبار واقفاً)", nameEn: "Overhead Press", target: "الأكتاف", sets: 4, repsRange: "6–8" },
            { id: "d5-e2", nameAr: "Dumbbell Lateral Raise (رفرفة جانبي)", nameEn: "Dumbbell Lateral Raise", target: "الأكتاف الجانبية", sets: 3, repsRange: "12–15" },
            { id: "d5-e3", nameAr: "Rear Delt Fly (رفرفة خلفي)", nameEn: "Rear Delt Fly", target: "الأكتاف الخلفية", sets: 3, repsRange: "12–15" },
            { id: "d5-e4", nameAr: "Front Raise (رفرفة أمامي بالدامبل)", nameEn: "Front Raise", target: "الأكتاف الأمامية", sets: 3, repsRange: "10–12" },
            { id: "d5-e5", nameAr: "Shrugs (ترقوة بالدامبلز)", nameEn: "Shrugs", target: "الترابييس", sets: 3, repsRange: "12–15" },
            { id: "d5-e6", nameAr: "Close Grip Bench Press (بنش ضيق)", nameEn: "Close Grip Bench Press", target: "الترايسبس / الصدر الداخلي", sets: 3, repsRange: "8–10" },
            { id: "d5-e7", nameAr: "EZ Bar Curl (بايسبس بالبار المائل)", nameEn: "EZ Bar Curl", target: "البايسبس", sets: 3, repsRange: "8–10" },
            { id: "d5-e8", nameAr: "Rope Pushdown (ترايسبس بالكابل)", nameEn: "Rope Pushdown", target: "الترايسبس", sets: 3, repsRange: "12" },
            { id: "d5-e9", nameAr: "Hammer Curl (بايسبس شاكوش بالتبادل)", nameEn: "Hammer Curl", target: "البايسبس / الساعد", sets: 3, repsRange: "12" }
        ]
    },
    6: {
        title: "اليوم السادس: راحة كاملة",
        isRest: true,
        description: "اليوم مخصص للراحة التامة وإطالة العضلات. يمكنك القيام بتمارين إطالة (Stretching) خفيفة ومشي عادي لتخفيف حدة الشد العضلي وتجهيز المفاصل للأسبوع القادم."
    },
    7: {
        title: "اليوم السابع: راحة واستشفاء",
        isRest: true,
        description: "أنت تقترب من نهاية دورتك الأسبوعية للتمارين. ركز اليوم على التغذية الجيدة والترطيب وشرب كميات كافية من المياه والنوم مبكراً لتستقبل الأسبوع الجديد بكامل طاقتك."
    }
};

// 2. Application State Variables
let currentDay = 1;
let isWorkoutActive = false;
let userWeight = 75;
let proteinRatio = 2.0;
let userHistory = {}; // Structure: { "day_1": { "exerciseId": { setIndex: { weight: X, reps: Y, checked: true } } } }

// Timer State Variables
let timerDuration = 90; // default 90 seconds
let timerTimeLeft = 90;
let timerInterval = null;
let isTimerPaused = true;

// Tips Carousel State Variables
let activeTipIndex = 1;

// 3. Selectors and Elements
const daysTabs = document.getElementById("days-tabs");
const workoutDayTitle = document.getElementById("workout-day-title");
const currentDateBadge = document.getElementById("current-date-badge");
const btnStartWorkout = document.getElementById("btn-start-workout");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const appSidebar = document.getElementById("app-sidebar");
const menuToggle = document.getElementById("menu-toggle");

// View Areas
const restDayView = document.getElementById("rest-day-view");
const exercisesView = document.getElementById("exercises-view");
const exercisesListContainer = document.getElementById("exercises-list");
const workoutProgressText = document.getElementById("workout-progress-text");
const workoutProgressBar = document.getElementById("workout-progress-bar");
const restDescription = document.getElementById("rest-description");

// Protein Calculator
const weightInput = document.getElementById("weight-input");
const ratioInput = document.getElementById("ratio-input");
const proteinResult = document.getElementById("protein-result");

// Stats Box
const statCompletedDays = document.getElementById("stat-completed-days");
const statTotalSets = document.getElementById("stat-total-sets");
const btnResetHistory = document.getElementById("btn-reset-history");

// Timer Bar Elements
const restTimerPanel = document.getElementById("rest-timer-panel");
const timerDisplay = document.getElementById("timer-display");
const timerProgressFill = document.getElementById("timer-progress-fill");
const btnTimerSub15 = document.getElementById("btn-timer-sub-15");
const btnTimerAdd15 = document.getElementById("btn-timer-add-15");
const btnTimerToggle = document.getElementById("btn-timer-toggle");
const timerToggleIcon = document.getElementById("timer-toggle-icon");
const btnTimerClose = document.getElementById("btn-timer-close");

// 4. Initialisation & Events
document.addEventListener("DOMContentLoaded", () => {
    // Initialise Date Badge
    updateDateBadge();
    
    // Load local storage values
    loadFromLocalStorage();

    // Render Side Menu tabs
    renderTabs();

    // Render current Day content
    switchDay(currentDay);

    // Initialise Protein Calculator
    calculateProtein();

    // Setup Lucide icons initially
    lucide.createIcons();

    // Setup Event Listeners
    setupEventListeners();

    // Auto loop the tips carousel every 6 seconds
    setInterval(nextTip, 6000);
});

// Update current date with format: "الأربعاء، 1 يوليو 2026"
function updateDateBadge() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic' };
    const today = new Date();
    currentDateBadge.textContent = today.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' });
}

// 5. Load and Save System (LocalStorage)
function loadFromLocalStorage() {
    // Load weight
    const savedWeight = localStorage.getItem("fit_weight");
    if (savedWeight) {
        userWeight = parseFloat(savedWeight);
        weightInput.value = userWeight;
    }

    // Load ratio
    const savedRatio = localStorage.getItem("fit_ratio");
    if (savedRatio) {
        proteinRatio = parseFloat(savedRatio);
        ratioInput.value = savedRatio;
    }

    // Load theme
    const savedTheme = localStorage.getItem("fit_theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeToggleBtn.innerHTML = `<i data-lucide="sun"></i>`;
    }

    // Load workout history log
    const savedHistory = localStorage.getItem("fit_user_history");
    if (savedHistory) {
        userHistory = JSON.parse(savedHistory);
    }
    
    updateStatsDashboard();
}

function saveToLocalStorage() {
    localStorage.setItem("fit_weight", userWeight);
    localStorage.setItem("fit_ratio", proteinRatio);
    localStorage.setItem("fit_user_history", JSON.stringify(userHistory));
}

// 6. Tab Navigation Logic
function renderTabs() {
    const tabsHTML = Object.keys(WORKOUT_DATA).map(dayKey => {
        const day = WORKOUT_DATA[dayKey];
        const isCurrent = parseInt(dayKey) === currentDay;
        const restClass = day.isRest ? "rest" : "";
        const activeClass = isCurrent ? "active" : "";
        return `
            <li class="day-tab ${restClass} ${activeClass}" data-day="${dayKey}">
                <span class="day-num">${dayKey}</span>
                <div class="day-info">
                    <span class="day-name">اليوم ${getDayNameWord(dayKey)}</span>
                    <span class="day-focus">${day.isRest ? 'راحة واستشفاء' : getFocusMuscle(day)}</span>
                </div>
            </li>
        `;
    }).join("");
    
    daysTabs.innerHTML = tabsHTML;

    // Attach click listeners
    const tabs = daysTabs.querySelectorAll(".day-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const dayNum = parseInt(tab.getAttribute("data-day"));
            switchDay(dayNum);
        });
    });
}

function getDayNameWord(dayNum) {
    const words = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع"];
    return words[dayNum - 1] || dayNum;
}

function getFocusMuscle(day) {
    if (day.title.includes("الصدر")) return "الصدر + الترايسبس";
    if (day.title.includes("الظهر")) return "الظهر + البايسبس";
    if (day.title.includes("الأرجل")) return "الأرجل + البطن";
    if (day.title.includes("الأكتاف")) return "الأكتاف + الذراعين";
    return "";
}

function switchDay(dayNum) {
    currentDay = dayNum;
    
    // Update Active Tab styles
    const tabs = daysTabs.querySelectorAll(".day-tab");
    tabs.forEach(t => {
        t.classList.remove("active");
        if (parseInt(t.getAttribute("data-day")) === dayNum) {
            t.classList.add("active");
        }
    });

    const dayData = WORKOUT_DATA[dayNum];
    workoutDayTitle.textContent = dayData.title;

    // Reset workout active button state
    isWorkoutActive = false;
    btnStartWorkout.classList.remove("btn-active-workout");
    btnStartWorkout.querySelector("span").textContent = "ابدأ التمرين";
    btnStartWorkout.querySelector("i").setAttribute("data-lucide", "play-circle");
    lucide.createIcons();

    if (dayData.isRest) {
        // Show Rest View
        restDayView.classList.remove("hidden");
        exercisesView.classList.add("hidden");
        restDescription.textContent = dayData.description;
        btnStartWorkout.classList.add("hidden");
    } else {
        // Show Workout View
        restDayView.classList.add("hidden");
        exercisesView.classList.remove("hidden");
        btnStartWorkout.classList.remove("hidden");
        renderExercises(dayData.exercises);
    }

    // Toggle menu closed on mobile if open
    appSidebar.classList.remove("open");
}

// 7. Render Exercises and Sets
function renderExercises(exercises) {
    let exercisesHTML = "";
    
    exercises.forEach((ex, exIndex) => {
        const isExp = exIndex === 0 ? "expanded" : ""; // Expand the first exercise by default
        
        // Count how many sets are logged for this exercise
        const loggedSets = userHistory[`day_${currentDay}`]?.[ex.id] || {};
        const totalSets = ex.sets;
        let completedCount = 0;
        for (let i = 0; i < totalSets; i++) {
            if (loggedSets[i]?.checked) {
                completedCount++;
            }
        }
        
        const isExCompletedClass = completedCount === totalSets ? "completed" : "";

        // Build sets rows
        let rowsHTML = "";
        for (let s = 0; s < totalSets; s++) {
            const setLog = loggedSets[s] || { weight: "", reps: "", checked: false };
            const rowCompletedClass = setLog.checked ? "completed-row" : "";
            const isChecked = setLog.checked ? "checked" : "";
            const placeholderReps = ex.repsRange;

            rowsHTML += `
                <tr class="set-row ${rowCompletedClass}" data-set-index="${s}">
                    <td class="set-num-col">جولة ${s + 1}</td>
                    <td class="set-target-col">${placeholderReps} تكرار</td>
                    <td class="set-input-col">
                        <input type="number" class="input-weight" value="${setLog.weight}" placeholder="--" data-ex-id="${ex.id}" data-set="${s}">
                        <span class="unit-label">كغ</span>
                    </td>
                    <td class="set-input-col">
                        <input type="number" class="input-reps" value="${setLog.reps}" placeholder="${placeholderReps.split('–')[0] || 10}" data-ex-id="${ex.id}" data-set="${s}">
                        <span class="unit-label">تكرار</span>
                    </td>
                    <td class="set-check-col">
                        <label class="checkbox-container ${isWorkoutActive ? '' : 'locked'}">
                            <input type="checkbox" class="check-set-complete" ${isChecked} data-ex-id="${ex.id}" data-set="${s}">
                            <span class="checkmark"></span>
                        </label>
                    </td>
                </tr>
            `;
        }

        exercisesHTML += `
            <div class="exercise-card ${isExp} ${isExCompletedClass}" id="card-${ex.id}">
                <div class="exercise-header" onclick="toggleExerciseExpand('${ex.id}')">
                    <div class="exercise-title-area">
                        <div class="exercise-badge-num">${exIndex + 1}</div>
                        <div class="exercise-titles">
                            <span class="exercise-title-ar">${ex.nameAr}</span>
                            <span class="exercise-title-en">${ex.nameEn}</span>
                        </div>
                    </div>
                    <div class="exercise-right-meta">
                        <span class="exercise-targets">${ex.target}</span>
                        <i data-lucide="chevron-down" class="exercise-chevron"></i>
                    </div>
                </div>
                <div class="exercise-details">
                    <div class="exercise-details-inner">
                        <table class="sets-table">
                            <thead>
                                <tr>
                                    <th>الجولة</th>
                                    <th>المستهدف</th>
                                    <th>الوزن الفعلي</th>
                                    <th>التكرارات المحققة</th>
                                    <th>إنجاز</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rowsHTML}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    });

    exercisesListContainer.innerHTML = exercisesHTML;
    
    // Add input changes event listners
    attachLogInputListeners();
    
    // Render progress indicators
    updateWorkoutProgress();
    
    lucide.createIcons();
}

function toggleExerciseExpand(id) {
    const card = document.getElementById(`card-${id}`);
    if (card) {
        card.classList.toggle("expanded");
    }
}

// 8. Workout Start / Log Inputs Event Handlers
function toggleWorkoutMode() {
    isWorkoutActive = !isWorkoutActive;
    
    if (isWorkoutActive) {
        btnStartWorkout.classList.add("btn-active-workout");
        btnStartWorkout.querySelector("span").textContent = "إنهاء الحصة";
        btnStartWorkout.querySelector("i").setAttribute("data-lucide", "check-circle");
        
        // Remove locked classes from checkbox wrappers
        const checkboxes = exercisesListContainer.querySelectorAll(".checkbox-container");
        checkboxes.forEach(c => c.classList.remove("locked"));
    } else {
        btnStartWorkout.classList.remove("btn-active-workout");
        btnStartWorkout.querySelector("span").textContent = "ابدأ التمرين";
        btnStartWorkout.querySelector("i").setAttribute("data-lucide", "play-circle");
        
        // Lock inputs
        const checkboxes = exercisesListContainer.querySelectorAll(".checkbox-container");
        checkboxes.forEach(c => c.classList.add("locked"));
        
        // Hide rest timer panel if active
        hideRestTimer();
    }
    
    lucide.createIcons();
}

function attachLogInputListeners() {
    // Weight and Reps logging listener
    const inputs = exercisesListContainer.querySelectorAll("input[type='number']");
    inputs.forEach(input => {
        input.addEventListener("input", (e) => {
            const exId = e.target.getAttribute("data-ex-id");
            const setIdx = parseInt(e.target.getAttribute("data-set"));
            const value = e.target.value;
            const isWeight = e.target.classList.contains("input-weight");

            // Build dynamic structure in userHistory if missing
            const dayKey = `day_${currentDay}`;
            if (!userHistory[dayKey]) userHistory[dayKey] = {};
            if (!userHistory[dayKey][exId]) userHistory[dayKey][exId] = {};
            if (!userHistory[dayKey][exId][setIdx]) {
                userHistory[dayKey][exId][setIdx] = { weight: "", reps: "", checked: false };
            }

            if (isWeight) {
                userHistory[dayKey][exId][setIdx].weight = value;
            } else {
                userHistory[dayKey][exId][setIdx].reps = value;
            }

            saveToLocalStorage();
            updateStatsDashboard();
        });
    });

    // Checkbox Listener
    const checkboxes = exercisesListContainer.querySelectorAll(".check-set-complete");
    checkboxes.forEach(check => {
        check.addEventListener("change", (e) => {
            if (!isWorkoutActive) {
                // Prevent checking if workout has not started
                e.target.checked = !e.target.checked;
                alert("يرجى الضغط على زر 'ابدأ التمرين' لبدء تتبع الحصة وتفعيل تدوين الجولات!");
                return;
            }

            const exId = e.target.getAttribute("data-ex-id");
            const setIdx = parseInt(e.target.getAttribute("data-set"));
            const checked = e.target.checked;

            const dayKey = `day_${currentDay}`;
            if (!userHistory[dayKey]) userHistory[dayKey] = {};
            if (!userHistory[dayKey][exId]) userHistory[dayKey][exId] = {};
            if (!userHistory[dayKey][exId][setIdx]) {
                // Fetch current values from inputs
                const card = document.getElementById(`card-${exId}`);
                const row = card.querySelectorAll(".set-row")[setIdx];
                const weight = row.querySelector(".input-weight").value;
                const reps = row.querySelector(".input-reps").value;
                userHistory[dayKey][exId][setIdx] = { weight, reps, checked: false };
            }

            userHistory[dayKey][exId][setIdx].checked = checked;

            // Visual row highlight
            const row = e.target.closest(".set-row");
            if (checked) {
                row.classList.add("completed-row");
                // Launch timer on checking complete
                startRestTimer(90); // Default 90s
            } else {
                row.classList.remove("completed-row");
            }

            // Save to localStorage
            saveToLocalStorage();
            
            // Check if entire exercise is complete
            checkExerciseCompletion(exId);
            
            // Update page top progress
            updateWorkoutProgress();
            
            // Update stats
            updateStatsDashboard();
        });
    });
}

function checkExerciseCompletion(exId) {
    const dayData = WORKOUT_DATA[currentDay];
    const ex = dayData.exercises.find(e => e.id === exId);
    if (!ex) return;

    const loggedSets = userHistory[`day_${currentDay}`]?.[exId] || {};
    let allDone = true;
    
    for (let s = 0; s < ex.sets; s++) {
        if (!loggedSets[s]?.checked) {
            allDone = false;
            break;
        }
    }

    const card = document.getElementById(`card-${exId}`);
    if (card) {
        if (allDone) {
            card.classList.add("completed");
        } else {
            card.classList.remove("completed");
        }
    }
}

function updateWorkoutProgress() {
    const dayData = WORKOUT_DATA[currentDay];
    if (dayData.isRest) return;

    const totalExercises = dayData.exercises.length;
    let completedExercises = 0;

    dayData.exercises.forEach(ex => {
        const loggedSets = userHistory[`day_${currentDay}`]?.[ex.id] || {};
        let exComplete = true;
        for (let s = 0; s < ex.sets; s++) {
            if (!loggedSets[s]?.checked) {
                exComplete = false;
                break;
            }
        }
        if (exComplete) completedExercises++;
    });

    workoutProgressText.textContent = `${completedExercises} / ${totalExercises} تمارين مكتملة`;
    const percentage = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;
    workoutProgressBar.style.width = `${percentage}%`;
}

// 9. Stats Dashboard Calculator
function updateStatsDashboard() {
    let completedDaysCount = 0;
    let totalSetsChecked = 0;

    // Process completed sets and unique completed workout days
    Object.keys(WORKOUT_DATA).forEach(dayKey => {
        const dayId = `day_${dayKey}`;
        if (userHistory[dayId]) {
            let dayHasSets = false;
            Object.keys(userHistory[dayId]).forEach(exId => {
                Object.keys(userHistory[dayId][exId]).forEach(setId => {
                    if (userHistory[dayId][exId][setId].checked) {
                        totalSetsChecked++;
                        dayHasSets = true;
                    }
                });
            });
            if (dayHasSets) {
                completedDaysCount++;
            }
        }
    });

    statCompletedDays.textContent = completedDaysCount;
    statTotalSets.textContent = totalSetsChecked;
}

function resetWeeklyHistory() {
    if (confirm("هل أنت متأكد من رغبتك في إعادة ضبط وإفراغ سجل تقدمك الحالي لهذا الأسبوع؟ لا يمكن استرجاع البيانات الممسوحة.")) {
        userHistory = {};
        saveToLocalStorage();
        updateStatsDashboard();
        
        // Re-render current day
        switchDay(currentDay);
    }
}

// 10. Smart Rest Timer Controller
function startRestTimer(seconds) {
    clearInterval(timerInterval);
    timerDuration = seconds;
    timerTimeLeft = seconds;
    isTimerPaused = false;
    
    restTimerPanel.classList.remove("hidden");
    updateTimerUI();

    timerInterval = setInterval(() => {
        if (!isTimerPaused) {
            timerTimeLeft--;
            if (timerTimeLeft <= 0) {
                timerTimeLeft = 0;
                clearInterval(timerInterval);
                playNotificationSound();
                hideRestTimer();
            }
            updateTimerUI();
        }
    }, 1000);
}

function updateTimerUI() {
    const mins = Math.floor(timerTimeLeft / 60);
    const secs = timerTimeLeft % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    // Update slider progress bar
    const ratio = (timerTimeLeft / timerDuration) * 100;
    timerProgressFill.style.width = `${ratio}%`;
    
    // Toggle play pause icon
    if (isTimerPaused) {
        timerToggleIcon.setAttribute("data-lucide", "play");
    } else {
        timerToggleIcon.setAttribute("data-lucide", "pause");
    }
    lucide.createIcons();
}

function toggleTimerPlay() {
    isTimerPaused = !isTimerPaused;
    updateTimerUI();
}

function hideRestTimer() {
    clearInterval(timerInterval);
    restTimerPanel.classList.add("hidden");
}

function changeTimerTime(amount) {
    timerTimeLeft += amount;
    if (timerTimeLeft < 0) timerTimeLeft = 0;
    
    // Adjust maximum duration if time left exceeds it
    if (timerTimeLeft > timerDuration) {
        timerDuration = timerTimeLeft;
    }
    updateTimerUI();
}

// Synthesize alert tone using Web Audio API (browser native, works offline, lightweight)
function playNotificationSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        function beep(delay, frequency, duration) {
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.type = 'sine';
            osc.frequency.value = frequency;
            
            gainNode.gain.setValueAtTime(0, audioCtx.currentTime + delay);
            gainNode.gain.linearRampToValueAtTime(0.4, audioCtx.currentTime + delay + 0.03);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);
            
            osc.start(audioCtx.currentTime + delay);
            osc.stop(audioCtx.currentTime + delay + duration);
        }
        
        // Clean professional ring tone (A6 & C7 chords)
        beep(0, 880, 0.15);
        beep(0.18, 1046.5, 0.15);
        beep(0.36, 1318.5, 0.3);
    } catch (e) {
        console.warn("Audio warning beep could not be played:", e);
    }
}

// 11. Protein Calculator Logic
function calculateProtein() {
    userWeight = parseFloat(weightInput.value) || 75;
    proteinRatio = parseFloat(ratioInput.value) || 2.0;

    const totalProtein = Math.round(userWeight * proteinRatio);
    proteinResult.textContent = totalProtein;

    saveToLocalStorage();
}

// 12. Tips Carousel Logic
function nextTip() {
    const activeTip = document.querySelector(".tip-item.active");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    
    activeTip.classList.remove("active");
    
    activeTipIndex = activeTipIndex + 1 > 4 ? 1 : activeTipIndex + 1;
    
    document.getElementById(`tip-${activeTipIndex}`).classList.add("active");
    
    dots.forEach(d => d.classList.remove("active"));
    document.querySelector(`.dot[data-tip="${activeTipIndex}"]`).classList.add("active");
}

function selectTip(index) {
    activeTipIndex = index;
    
    const tips = document.querySelectorAll(".tip-item");
    tips.forEach(t => t.classList.remove("active"));
    document.getElementById(`tip-${index}`).classList.add("active");
    
    const dots = document.querySelectorAll(".carousel-dots .dot");
    dots.forEach(d => d.classList.remove("active"));
    document.querySelector(`.dot[data-tip="${index}"]`).classList.add("active");
}

// 13. System Event Setup
function setupEventListeners() {
    // Start workout button
    btnStartWorkout.addEventListener("click", toggleWorkoutMode);

    // Protein input fields
    weightInput.addEventListener("input", calculateProtein);
    ratioInput.addEventListener("change", calculateProtein);

    // Reset weekly log button
    btnResetHistory.addEventListener("click", resetWeeklyHistory);

    // Theme Switcher Button
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        localStorage.setItem("fit_theme", isLight ? "light" : "dark");
        
        themeToggleBtn.innerHTML = isLight ? `<i data-lucide="sun"></i>` : `<i data-lucide="moon"></i>`;
        lucide.createIcons();
    });

    // Mobile Sidebar Drawer Toggle
    menuToggle.addEventListener("click", () => {
        appSidebar.classList.toggle("open");
    });

    // Rest Timer operations
    btnTimerToggle.addEventListener("click", toggleTimerPlay);
    btnTimerClose.addEventListener("click", hideRestTimer);
    btnTimerSub15.addEventListener("click", () => changeTimerTime(-15));
    btnTimerAdd15.addEventListener("click", () => changeTimerTime(15));

    // Dots of tips click selector
    const dots = document.querySelectorAll(".carousel-dots .dot");
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-tip"));
            selectTip(index);
        });
    });
}
