/* اتجاه التصميم: ملف هندسي تحريري بهوية سعودية. التفاعلات تقتصر على التنقل السلس، إغلاق قائمة Bootstrap، وتحديث السنة. */
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  const navCollapseElement = document.getElementById("mainNav");
  const navCollapse = navCollapseElement ? bootstrap.Collapse.getOrCreateInstance(navCollapseElement, { toggle: false }) : null;
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navCollapse) navCollapse.hide();
    });
  });
});
