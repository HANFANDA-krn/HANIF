// ========== SEQUENCE CONTROLLER ========== 
let currentStage = 0;
const stages = [
  'intro',
  'journey-mercury',
  'journey-venus',
  'journey-earth',
  'journey-mars',
  'journey-jupiter',
  'journey-saturn',
  'journey-uranus',
  'meteor-impact',
  'main-website'
];

function showStage(index) {
  // Hide all stages
  document.querySelectorAll('.stage').forEach(stage => {
    stage.classList.remove('active');
  });
  
  // Show target stage
  const targetStage = document.getElementById(stages[index]);
  if (targetStage) {
    targetStage.classList.add('active');
    currentStage = index;
  }
}

// ========== TOMBOL MASUK: Start Journey ========== 
const btnMasuk = document.getElementById('btnMasuk');
if (btnMasuk) {
  btnMasuk.addEventListener('click', startJourney);
}

function startJourney() {
  // Mulai dari planet pertama (Merkurius)
  showStage(1);
  
  // Auto sequence planet journey
  let planetIndex = 1;
  const planetInterval = setInterval(() => {
    planetIndex++;
    if (planetIndex <= 7) { // Sampai Uranus (index 7)
      show
\<Streaming stoppped because the conversation grew too long for this model\>
