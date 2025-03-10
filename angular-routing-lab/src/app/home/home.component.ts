import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Smooth Scroll Back to Top
    const backToTop = document.getElementById("backToTop") as HTMLElement;
    if (backToTop) {
      window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 200 ? "block" : "none";
      });

      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Count-up Animation for Stats
    const counters = document.querySelectorAll(".count-up");
    counters.forEach(counter => {
      const element = counter as HTMLElement; // ✅ Explicitly cast to HTMLElement
      const target = +element.getAttribute("data-target")!;
      const updateCount = () => {
        const count = +element.innerText;
        const increment = target / 200;
        if (count < target) {
          element.innerText = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 10);
        } else {
          element.innerText = target.toString();
        }
      };
      updateCount();
    });
  }
}