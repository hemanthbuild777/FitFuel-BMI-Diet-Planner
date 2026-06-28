const DIET_PLANS = {
  Underweight: {
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)',
    accent: '#60a5fa',
    tagline: 'Build strength & gain healthy weight',
    description: 'Your BMI indicates you are underweight. Focus on nutrient-dense, calorie-rich foods to gain healthy weight gradually.',
    macros: { calories: '2500–3000', protein: '100–120g', carbs: '320–380g', fat: '80–100g' },
    tips: [
      { icon: '🥑', text: 'Eat calorie-dense foods like nuts, avocado, olive oil' },
      { icon: '💪', text: 'Strength training 3× per week to build muscle' },
      { icon: '🕐', text: '5–6 smaller meals spread through the day' },
      { icon: '🥤', text: 'Protein smoothies between meals for extra calories' }
    ],
    weekly: {
      Monday:    { breakfast: 'Oats with banana, honey & whole milk + 2 boiled eggs', lunch: 'Brown rice + grilled chicken (200g) + dal + ghee', dinner: 'Chapati (3) + paneer curry + salad + warm milk', snack: 'Peanut butter toast + banana smoothie' },
      Tuesday:   { breakfast: 'Upma with nuts & vegetables + 2 eggs scrambled + juice', lunch: 'Rice + fish curry + mixed vegetable sabzi + curd', dinner: 'Paratha (2) with butter + rajma curry + salad', snack: 'Dates, almonds & cashews + milk' },
      Wednesday: { breakfast: 'Whole-wheat toast (3 slices) + avocado + poached eggs + milk', lunch: 'Chicken biryani (large) + raita + salad', dinner: 'Rice + mutton curry + dal + roti (2)', snack: 'Trail mix (nuts & dried fruits) + protein shake' },
      Thursday:  { breakfast: 'Poha with peanuts + 2 boiled eggs + mango smoothie', lunch: 'Pasta with chicken & cream sauce + garlic bread', dinner: 'Roti (3) + chana masala + paneer + warm milk', snack: 'Whole-fruit bowl + peanut butter crackers' },
      Friday:    { breakfast: 'Idli (4) + sambar + coconut chutney + boiled eggs (2)', lunch: 'Chole rice + salad + curd', dinner: 'Grilled fish + mashed potato + steamed vegetables', snack: 'Banana milkshake + handful of mixed nuts' },
      Saturday:  { breakfast: 'Dosa (3) + paneer filling + sambar + juice', lunch: 'Egg fried rice + tofu stir-fry + soup', dinner: 'Chapati (3) + palak paneer + dal makhani', snack: 'Cheese sandwich + fruit salad' },
      Sunday:    { breakfast: 'Pancakes with honey & banana + boiled eggs (2) + milk', lunch: 'Chicken pulao + mixed veg raita + salad', dinner: 'Pizza (whole-wheat, loaded with toppings) + soup', snack: 'Ice cream + dry fruit laddoo' }
    }
  },
  Normal: {
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    accent: '#34d399',
    tagline: 'Maintain your ideal balance',
    description: 'Great job! Your BMI is in the healthy range. Focus on maintaining your weight with a balanced, varied diet.',
    macros: { calories: '1800–2200', protein: '75–100g', carbs: '220–280g', fat: '55–75g' },
    tips: [
      { icon: '🥗', text: 'Eat the rainbow — varied fruits & vegetables daily' },
      { icon: '🏃', text: '150 min moderate cardio per week (brisk walk/jog)' },
      { icon: '💧', text: '8+ glasses of water daily, before each meal' },
      { icon: '😴', text: '7–8 hours quality sleep for hormonal balance' }
    ],
    weekly: {
      Monday:    { breakfast: 'Oats porridge + berries + flax seeds + green tea', lunch: 'Brown rice + grilled chicken (150g) + dal + salad', dinner: 'Chapati (2) + mixed veg sabzi + curd + soup', snack: 'Apple + 10 almonds' },
      Tuesday:   { breakfast: 'Whole-wheat toast + peanut butter + banana + milk', lunch: 'Quinoa salad with chickpeas + lemon dressing', dinner: 'Roti (2) + paneer tikka + raita + salad', snack: 'Greek yogurt + honey' },
      Wednesday: { breakfast: 'Idli (3) + sambar + coconut chutney + black coffee', lunch: 'Grilled fish + brown rice + stir-fried vegetables', dinner: 'Chapati (2) + dal tadka + spinach sabzi + salad', snack: 'Fruit chaat (seasonal fruits)' },
      Thursday:  { breakfast: 'Smoothie bowl: spinach, banana, berries + granola', lunch: 'Chicken wrap with veggies + hummus + soup', dinner: 'Rice + egg curry + cucumber raita', snack: 'Roasted chana + green tea' },
      Friday:    { breakfast: 'Poha + vegetables + lemon + coriander + boiled egg', lunch: 'Rajma rice + salad + lassi (low-fat)', dinner: 'Chapati (2) + mixed daal + sabzi + curd', snack: 'Banana + 10 walnuts' },
      Saturday:  { breakfast: 'Veggie omelette (2 eggs) + toast + orange juice', lunch: 'Chole + brown rice + raita + salad', dinner: 'Grilled chicken + roasted vegetables + soup', snack: 'Trail mix (low quantity) + water' },
      Sunday:    { breakfast: 'Upma + sambhar + coconut chutney + coffee', lunch: 'Vegetable biryani + raita + papad', dinner: 'Roti (2) + palak paneer + dal + salad', snack: 'Mango lassi (small)' }
    }
  },
  Overweight: {
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)',
    accent: '#fbbf24',
    tagline: 'Rebalance with smart choices',
    description: 'Your BMI suggests you are slightly overweight. A moderate calorie deficit with whole foods will help you return to a healthy range.',
    macros: { calories: '1500–1800', protein: '85–105g', carbs: '150–190g', fat: '45–60g' },
    tips: [
      { icon: '🥦', text: 'Fill half your plate with non-starchy vegetables' },
      { icon: '🚫', text: 'Eliminate sugary drinks, refined flour & fried food' },
      { icon: '⏱️', text: 'Try 16:8 intermittent fasting — consult doctor first' },
      { icon: '🚶', text: '10,000 steps per day + strength training 3×/week' }
    ],
    weekly: {
      Monday:    { breakfast: 'Oats with skimmed milk + 1 fruit + green tea (no sugar)', lunch: 'Grilled chicken salad + olive oil dressing + soup', dinner: 'Chapati (1) + dal + mixed vegetables + salad', snack: 'Cucumber sticks + hummus' },
      Tuesday:   { breakfast: 'Moong dal chilla (2) + mint chutney + black coffee', lunch: 'Brown rice (small) + fish curry + stir-fried greens', dinner: 'Roti (1) + rajma (half cup) + salad + curd (low-fat)', snack: 'Apple + green tea' },
      Wednesday: { breakfast: 'Scrambled eggs (2) + whole-wheat toast + salad', lunch: 'Quinoa + grilled vegetables + lemon tahini', dinner: 'Chapati (1) + paneer bhurji + soup + salad', snack: 'Buttermilk (chaas) + 5 almonds' },
      Thursday:  { breakfast: 'Smoothie: spinach + apple + ginger + chia seeds', lunch: 'Chicken soup + multigrain bread + salad', dinner: 'Dal khichdi (light) + curd + cucumber salad', snack: 'Roasted makhana (fox nuts)' },
      Friday:    { breakfast: 'Idli (2) + sambar (less oil) + green tea', lunch: 'Sprout salad + boiled egg (2) + soup', dinner: 'Roti (1) + mixed dal + palak sabzi + raita', snack: 'Pear + herbal tea' },
      Saturday:  { breakfast: 'Veggie omelette (2 eggs, no oil) + black coffee', lunch: 'Grilled fish + roasted vegetables + brown rice (small)', dinner: 'Chapati (1) + chana curry + salad', snack: 'Greek yogurt (plain, low-fat)' },
      Sunday:    { breakfast: 'Upma (small, less oil) + coconut chutney + lemon water', lunch: 'Vegetable soup + multigrain roti (1) + salad', dinner: 'Dal tadka + roti (1) + sabzi + buttermilk', snack: 'Watermelon slices' }
    }
  },
  Obese: {
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)',
    accent: '#f87171',
    tagline: 'Start your transformation today',
    description: 'Your BMI indicates obesity. Structured dietary changes combined with regular movement can significantly improve your health. Please consult a healthcare provider.',
    macros: { calories: '1200–1500', protein: '90–110g', carbs: '100–140g', fat: '35–50g' },
    tips: [
      { icon: '🩺', text: 'Consult a doctor or dietitian before starting a plan' },
      { icon: '🚶', text: 'Begin with 20–30 min walking daily, then increase' },
      { icon: '📋', text: 'Track every meal with a food diary app' },
      { icon: '🥤', text: 'Drink 500ml water before every meal to reduce intake' }
    ],
    weekly: {
      Monday:    { breakfast: 'Moong dal chilla (1) + mint chutney + black coffee / green tea', lunch: 'Grilled chicken (100g) + large salad + clear soup', dinner: 'Roti (1 small) + dal + steamed vegetables + salad', snack: 'Cucumber + lemon + black salt' },
      Tuesday:   { breakfast: 'Boiled eggs (2 whites + 1 whole) + spinach + lemon water', lunch: 'Brown rice (small) + fish curry + green salad', dinner: 'Chapati (1 small) + mixed veg sabzi + dal soup', snack: 'Herbal tea + 4 almonds' },
      Wednesday: { breakfast: 'Oats (plain, water-cooked) + 1 fruit + black coffee', lunch: 'Grilled tofu + stir-fried vegetables + clear soup', dinner: 'Dal khichdi (light) + raita (low-fat) + salad', snack: 'Roasted makhana (small bowl)' },
      Thursday:  { breakfast: 'Smoothie: spinach + cucumber + ginger + lemon (no sugar)', lunch: 'Sprout salad + boiled egg (1) + soup + salad', dinner: 'Roti (1 small) + chana masala (less oil) + salad', snack: 'Buttermilk (thin chaas, no sugar)' },
      Friday:    { breakfast: 'Idli (2 small) + sambar (minimal oil) + green tea', lunch: 'Grilled chicken breast (100g) + large salad + soup', dinner: 'Mixed vegetable soup + roti (1 small)', snack: 'Watermelon / papaya slices' },
      Saturday:  { breakfast: 'Scrambled egg whites (3) + tomatoes + black coffee', lunch: 'Paneer tikka (grilled, no oil) + salad + soup', dinner: 'Dal + steamed vegetables + roti (1 small)', snack: 'Cucumber sticks + lemon' },
      Sunday:    { breakfast: 'Vegetable oats upma (no oil) + lemon water', lunch: 'Clear vegetable soup + salad + 2 boiled eggs', dinner: 'Palak dal + roti (1 small) + salad + chaas', snack: 'Herbal tea + 3 walnuts' }
    }
  }
};

let currentBMI = null;
let currentCategory = null;
let currentDay = 'Monday';

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value) || 25;
  const gender = document.getElementById('gender').value;

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    showError('Please enter valid weight and height.');
    return;
  }

  const heightM = heightCm / 100;
  const bmi = parseFloat((weight / (heightM * heightM)).toFixed(1));

  // Ideal weight range
  const idealMin = parseFloat((18.5 * heightM * heightM).toFixed(1));
  const idealMax = parseFloat((24.9 * heightM * heightM).toFixed(1));

  // BMR (Mifflin-St Jeor)
  let bmr;
  if (gender === 'male') {
    bmr = Math.round(10 * weight + 6.25 * heightCm - 5 * age + 5);
  } else {
    bmr = Math.round(10 * weight + 6.25 * heightCm - 5 * age - 161);
  }

  let category;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  currentBMI = bmi;
  currentCategory = category;

  animateNeedle(bmi);
  renderResults(bmi, category, idealMin, idealMax, bmr, weight, heightCm, age, gender);
}

function animateNeedle(bmi) {
  const clamped = Math.max(10, Math.min(40, bmi));
  // BMI 10 = -90deg (left/underweight), BMI 25 = 0deg (top), BMI 40 = +90deg (right/obese)
  const angleDeg = -90 + ((clamped - 10) / 30) * 180;
  const needle = document.getElementById('needle-group');
  if (needle) needle.style.transform = `rotate(${angleDeg}deg)`;
}

function renderResults(bmi, category, idealMin, idealMax, bmr, weight, heightCm, age, gender) {
  const plan = DIET_PLANS[category];
  const weightDiff = category === 'Normal' ? 0 :
    category === 'Underweight' ? +(idealMin - weight).toFixed(1) :
    +(weight - idealMax).toFixed(1);

  document.getElementById('results-section').style.display = 'block';
  document.getElementById('results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Update category badge
  document.getElementById('cat-badge').textContent = category;
  document.getElementById('cat-badge').style.background = plan.color;
  document.getElementById('bmi-big').textContent = bmi.toFixed(1);
  document.getElementById('cat-tagline').textContent = plan.tagline;
  document.getElementById('cat-desc').textContent = plan.description;
  document.getElementById('ideal-range').textContent = `${idealMin}–${idealMax} kg`;
  document.getElementById('bmr-val').textContent = `${bmr} kcal`;
  document.getElementById('results-section').style.setProperty('--cat-color', plan.color);
  document.getElementById('results-section').style.setProperty('--cat-accent', plan.accent);

  if (category !== 'Normal') {
    document.getElementById('weight-goal').textContent =
      category === 'Underweight' ? `+${weightDiff} kg to gain` : `${weightDiff} kg to lose`;
  } else {
    document.getElementById('weight-goal').textContent = 'Perfect weight!';
  }

  // Tips
  document.getElementById('tips-container').innerHTML = plan.tips.map(t => `
    <div class="tip-card">
      <span class="tip-icon">${t.icon}</span>
      <span class="tip-text">${t.text}</span>
    </div>
  `).join('');

  // Macros
  document.getElementById('macro-calories').textContent = plan.macros.calories;
  document.getElementById('macro-protein').textContent = plan.macros.protein;
  document.getElementById('macro-carbs').textContent = plan.macros.carbs;
  document.getElementById('macro-fat').textContent = plan.macros.fat;

  // Render meal table for current day
  renderMealTable(currentDay);
}

function renderMealTable(day) {
  currentDay = day;
  if (!currentCategory) return;
  const plan = DIET_PLANS[currentCategory];
  const days = Object.keys(plan.weekly);
  const meals = plan.weekly[day];

  // Day tabs
  document.getElementById('day-tabs').innerHTML = days.map(d => `
    <button class="day-tab ${d === day ? 'active' : ''}" onclick="renderMealTable('${d}')">${d.slice(0,3)}</button>
  `).join('');

  document.getElementById('meal-table-body').innerHTML = `
    <tr>
      <td class="meal-type"><span class="meal-badge breakfast">🌅 Breakfast</span></td>
      <td class="meal-content">${meals.breakfast}</td>
    </tr>
    <tr>
      <td class="meal-type"><span class="meal-badge snack">🍎 Morning Snack</span></td>
      <td class="meal-content">${meals.snack}</td>
    </tr>
    <tr>
      <td class="meal-type"><span class="meal-badge lunch">☀️ Lunch</span></td>
      <td class="meal-content">${meals.lunch}</td>
    </tr>
    <tr>
      <td class="meal-type"><span class="meal-badge dinner">🌙 Dinner</span></td>
      <td class="meal-content">${meals.dinner}</td>
    </tr>
  `;
}

function showError(msg) {
  const err = document.getElementById('error-msg');
  err.textContent = msg;
  err.style.display = 'block';
  setTimeout(() => { err.style.display = 'none'; }, 3000);
}

window.onload = function () {
  const needle = document.getElementById('needle-group');
  if (needle) needle.style.transition = 'none';
  animateNeedle(10);
  setTimeout(() => {
    if (needle) needle.style.transition = 'transform 0.9s cubic-bezier(.34,1.4,.64,1)';
  }, 100);
};