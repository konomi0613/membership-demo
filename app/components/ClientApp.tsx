// components/ClientApp.tsx
"use client";

import { useEffect } from "react";

export default function ClientApp() {
  useEffect(() => {
    // Helper: show page by id
    function showPageById(pageId: string, clickedEl?: Element) {
      document.querySelectorAll<HTMLElement>(".page").forEach((p) => {
        p.classList.remove("active");
      });
      const target = document.getElementById(pageId);
      if (target) target.classList.add("active");

      // update nav links
      document.querySelectorAll<HTMLElement>(".nav-link").forEach((a) => {
        a.classList.remove("active");
      });
      if (clickedEl && clickedEl.classList.contains("nav-link")) {
        clickedEl.classList.add("active");
      }
      // scroll top
      window.scrollTo(0, 0);
    }

    // nav link click
    function onNavClick(e: Event) {
      e.preventDefault();
      const el = e.currentTarget as HTMLElement;
      const target = el.getAttribute("data-target");
      if (target) showPageById(target, el);
    }

    document.querySelectorAll<HTMLElement>(".nav-link").forEach((el) => {
      el.addEventListener("click", onNavClick);
    });

    // cta buttons with data-target
    document.querySelectorAll<HTMLElement>(".nav-cta").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const t = el.getAttribute("data-target");
        if (t) showPageById(t, el);
      });
    });

    // FAQ toggle
    function toggleFAQ(element: HTMLElement) {
      const answer = element.nextElementSibling as HTMLElement | null;
      if (!answer) return;
      if (answer.classList.contains("active")) {
        answer.classList.remove("active");
        const icon = element.querySelector("span:last-child");
        if (icon) icon.textContent = "+";
      } else {
        document.querySelectorAll<HTMLElement>(".faq-answer.active").forEach((it) => {
          it.classList.remove("active");
          const prev = it.previousElementSibling;
          if (prev) {
            const icon = prev.querySelector("span:last-child");
            if (icon) icon.textContent = "+";
          }
        });
        answer.classList.add("active");
        const icon = element.querySelector("span:last-child");
        if (icon) icon.textContent = "−";
      }
    }

    document.querySelectorAll<HTMLElement>(".faq-question").forEach((el) => {
      el.addEventListener("click", () => toggleFAQ(el));
    });

    // filter tips
    function filterTips(category: string, clickedEl?: Element) {
      document.querySelectorAll<HTMLElement>(".filter-tag").forEach((btn) => {
        btn.classList.remove("active");
      });
      if (clickedEl) (clickedEl as HTMLElement).classList.add("active");

      document.querySelectorAll<HTMLElement>(".article-card").forEach((article) => {
        if (category === "all" || article.dataset.category === category) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
    }

    document.querySelectorAll<HTMLElement>(".filter-tag").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const c = (e.currentTarget as HTMLElement).getAttribute("data-category") || "all";
        filterTips(c, e.currentTarget as Element);
      });
    });

    // filter FAQ categories
    function filterFAQ(category: string, clickedEl?: Element) {
      document.querySelectorAll<HTMLElement>(".category-button").forEach((btn) => {
        btn.classList.remove("active");
      });
      if (clickedEl) (clickedEl as HTMLElement).classList.add("active");

      document.querySelectorAll<HTMLElement>(".faq-item").forEach((faq) => {
        if (category === "all" || faq.dataset.category === category) {
          faq.style.display = "block";
        } else {
          faq.style.display = "none";
        }
      });
    }

    document.querySelectorAll<HTMLElement>(".category-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const c = (e.currentTarget as HTMLElement).getAttribute("data-category") || "all";
        filterFAQ(c, e.currentTarget as Element);
      });
    });

    // Forms (contact & login)
    function handleContactSubmit(e: Event) {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const successMessage = document.createElement("div");
      successMessage.style.cssText = `
        background: #2EA89C;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
      `;
      successMessage.textContent = "お問い合わせありがとうございます。24時間以内にご返答いたします。";

      form.appendChild(successMessage);
      form.reset();

      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }

    function handleLoginSubmit(e: Event) {
      e.preventDefault();
      const loginContainer = document.querySelector(".login-container") as HTMLElement | null;
      if (!loginContainer) return;
      const successMessage = document.createElement("div");
      successMessage.style.cssText = `
        background: #2EA89C;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
      `;
      successMessage.textContent = "ログインしました！講座ページにリダイレクトします...";

      loginContainer.appendChild(successMessage);

      setTimeout(() => {
        showPageById("lessons");
        successMessage.remove();
      }, 2000);
    }

    // bind forms
    document.querySelectorAll<HTMLFormElement>(".contact-form").forEach((f) => {
      f.addEventListener("submit", (e) => {
        const id = f.closest(".page")?.id;
        // determine which form: if within #login use login handler
        if (id === "login") {
          handleLoginSubmit(e);
        } else {
          handleContactSubmit(e);
        }
      });
    });

    // social login buttons
    document.querySelectorAll<HTMLElement>(".social-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const provider = (e.currentTarget as HTMLElement).textContent?.trim() || "";
        const loginContainer = document.querySelector(".login-container") as HTMLElement | null;
        if (!loginContainer) return;
        const message = document.createElement("div");
        message.style.cssText = `
          background: #F5E9D4;
          color: #0F3B6B;
          padding: 1rem;
          border-radius: 10px;
          margin-top: 1rem;
          text-align: center;
        `;
        message.textContent = `${provider}でのログイン機能は準備中です。`;
        loginContainer.appendChild(message);
        setTimeout(() => message.remove(), 3000);
      });
    });

    // Element SDK init (if window.elementSdk exists)
    function onConfigChange(config: any) {
      const defaultConfig = {
        course_title: "WordPressテーマ開発講座",
        course_subtitle: "オリジナルテーマを作ろう",
        welcome_message: "WordPressの世界へようこそ",
        course_description: "初心者から上級者まで学べる実践的な講座です",
        footer_text: "© 2024 WordPressテーマ開発講座",
        primary_color: "#0F3B6B",
        secondary_color: "#2EA89C",
        accent_color: "#FF8A4B",
        background_color: "#F5E9D4",
        text_color: "#333333",
        font_family: "Noto Sans JP",
        font_size: 16,
      };

      const courseTitle = config.course_title || defaultConfig.course_title;
      const courseSubtitle = config.course_subtitle || defaultConfig.course_subtitle;
      const welcomeMessage = config.welcome_message || defaultConfig.welcome_message;
      const courseDescription = config.course_description || defaultConfig.course_description;
      const footerText = config.footer_text || defaultConfig.footer_text;

      const titleEl = document.getElementById("site-title");
      if (titleEl) titleEl.textContent = courseTitle;
      const courseTitleEl = document.getElementById("course-title");
      if (courseTitleEl) courseTitleEl.textContent = courseTitle;
      const courseSubtitleEl = document.getElementById("course-subtitle");
      if (courseSubtitleEl) courseSubtitleEl.textContent = courseSubtitle;
      const welcomeMessageEl = document.getElementById("welcome-message");
      if (welcomeMessageEl) welcomeMessageEl.textContent = welcomeMessage;
      const courseDescEl = document.getElementById("course-description");
      if (courseDescEl) courseDescEl.textContent = courseDescription;
      const footerEl = document.getElementById("footer-text");
      if (footerEl) footerEl.textContent = footerText;

      // colors & font
      const primaryColor = config.primary_color || defaultConfig.primary_color;
      const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
      const accentColor = config.accent_color || defaultConfig.accent_color;
      const backgroundColor = config.background_color || defaultConfig.background_color;
      const textColor = config.text_color || defaultConfig.text_color;

      document.documentElement.style.setProperty("--primary-color", primaryColor);
      document.documentElement.style.setProperty("--secondary-color", secondaryColor);
      document.documentElement.style.setProperty("--accent-color", accentColor);
      document.documentElement.style.setProperty("--background-color", backgroundColor);
      document.documentElement.style.setProperty("--text-color", textColor);

      const fontFamily = config.font_family || defaultConfig.font_family;
      const fontSize = config.font_size || defaultConfig.font_size;
      document.body.style.fontFamily = `'${fontFamily}', sans-serif`;
      document.body.style.fontSize = `${fontSize}px`;
    }

    if (typeof window !== "undefined" && (window as any).elementSdk) {
      try {
        (window as any).elementSdk.init({
          defaultConfig: {},
          onConfigChange,
          // mapToCapabilities / mapToEditPanelValues can be added if needed
        });
      } catch (err) {
        // ignore
        // console.warn("elementSdk init failed", err);
      }
    }

    // cleanup function
    return () => {
      document.querySelectorAll<HTMLElement>(".nav-link").forEach((el) => {
        el.removeEventListener("click", onNavClick);
      });
      // other listeners are anonymous; in small demos we don't remove all, but in prod keep references to remove.
    };
  }, []);

  return null;
}
