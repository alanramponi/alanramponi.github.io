$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-news");
  const newsItems = document.querySelectorAll(".news-item");

  if (!toggleBtn || newsItems.length <= 5) {
    if (toggleBtn) toggleBtn.style.display = "none";
    return;
  }

  let expanded = false;

  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();

    expanded = !expanded;

    newsItems.forEach((item, index) => {
      if (index >= 5) {
        item.classList.toggle("hidden-news", !expanded);
      }
    });

    toggleBtn.innerHTML = expanded
      ? '<i class="fas fa-chevron-up"></i> hide older news'
      : '<i class="fas fa-chevron-down"></i> show older news';

    if (!expanded) {
      // Scroll back to the top of the news list when collapsing
      document.getElementById("news-list").scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});