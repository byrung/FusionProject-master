// 토글 버튼 클릭 시 사이드바 및 콘텐츠 활성/비활성화
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});