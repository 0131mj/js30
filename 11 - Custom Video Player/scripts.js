/* Get Our Elements */
const player        = document.querySelector('.player');
const video         = player.querySelector('.viewer');
const progress      = player.querySelector('.progress');
const progressBar   = player.querySelector('.progress__filled');
const toggle        = player.querySelector('.toggle');
const skipButtons   = player.querySelectorAll('[data-skip]');
const ranges        = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
//  const method = video.paused ? 'play' : 'pause';
//  video[method]();
}

function updateButton() {
//  const icon = this.paused ? '►' : '❚ ❚';
//  console.log(icon);
//  toggle.textContent = icon;
}

function skip() {
// console.log(this.dataset)
// video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
//  video[this.name] = this.value;
}

function handleProgress() {
//  const percent = (video.currentTime / video.duration) * 100;
//  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
//  console.log(e)
//  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//  video.currentTime = scrubTime;
}

/* Hook up the event listeners */

/* 재생/정지 토글 */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);


/* 버튼모양 토글 */
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

/* 스킵버튼 2개  */
skipButtons.forEach(button => button.addEventListener('click', skip));

/* 볼륨 및 배속 설정 */
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

/* 프로그레스바 */
video.addEventListener('timeupdate', handleProgress);


/* 원하는 지점을 클릭했을때 부터 재생 시작하게 하기 */
progress.addEventListener('click', scrub);

// 마우스 클릭 설정 - 스크럽
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); //마우스가 다운된 상태라면 스크럽 실행
progress.addEventListener('mousedown', () => mousedown = true); //마우스 다운 
progress.addEventListener('mouseup', () => mousedown = false); //마우스 다운 해제
