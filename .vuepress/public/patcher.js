var $buoop = {
    required: { e: -4, f: -10, o: -6, s: -2, c: -10 },
    insecure: true,
    unsupported: true,
    api: 2020.02,
}
function $buo_f() {
    var e = document.createElement('script')
    e.src = '//browser-update.org/update.min.js'
    document.body.appendChild(e)
}
try {
    document.addEventListener('DOMContentLoaded', $buo_f, false)
} catch (e) {
    window.attachEvent('onload', $buo_f)
} // Notification for updating browser