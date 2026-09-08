(function () {
    "use strict";

    /* ========================================================================
       DONNÉES DES CARTES
       Les chemins des médias, posters et vidéos existants restent inchangés.
       ======================================================================== */

    const tourismeVideos = [
        {
            title: "L'Épicurie Fine — épicerie fine",
            desc: "Mise en valeur de l'ambiance boutique, sélection des produits du terroir et accroche conçue pour déclencher la visite.",
            chips: ["Boutique", "Tournage + montage"],
            video: "assets/videos/tourisme-1.mp4",
            poster: "assets/images/tourisme-1-poster.jpg"
        },
        {
            title: "Fun Parc Brumath — loisirs",
            desc: "Format dynamique construit autour d'une question directe pour capter un public familial en quête d'activités.",
            chips: ["Loisirs", "Accroche directe"],
            video: "assets/videos/tourisme-2.mp4",
            poster: "assets/images/tourisme-2-poster.jpg"
        },
        {
            title: "Immersion dans un gîte",
            desc: "Visite guidée structurée selon un parcours logique, pensée pour susciter la projection dans le séjour.",
            chips: ["Hébergement", "Storytelling"],
            video: "assets/videos/tourisme-3.mp4",
            poster: "assets/images/tourisme-3-poster.jpg"
        },
        {
            title: "Bax Bowling — loisirs indoor",
            desc: "Cadrage rythmé et ambiance mise en avant pour promouvoir une activité de groupe accessible toute l'année.",
            chips: ["Loisirs", "Sortie de groupe"],
            video: "assets/videos/tourisme-4.mp4",
            poster: "assets/images/tourisme-4-poster.jpg"
        }
    ];

    const posts = [
        {
            title: "Miel'sace — « Du rayon au pot »",
            desc: "Mise en valeur du circuit court et de l'authenticité d'un produit local, avec une composition contrastée et percutante.",
            img: "assets/images/post-1.jpg",
            alt: "Concept graphique Miel'sace intitulé Du rayon au pot"
        },
        {
            title: "Boulangerie d'Alsace — Savoir-faire artisanal",
            desc: "Mise en avant du temps de fermentation et de l'exigence du métier, pour valoriser la qualité du produit brut.",
            img: "assets/images/post-2.jpg",
            alt: "Concept graphique Boulangerie d'Alsace consacré au savoir-faire artisanal"
        },
        {
            title: "Gîte &amp; Conciergerie — Invitation au séjour",
            desc: "Visuel immersif orienté réservation, avec appel à l'action clair et hiérarchie éditoriale pensée pour convertir.",
            img: "assets/images/post-3.jpg",
            alt: "Concept graphique Gîte et Conciergerie conçu comme une invitation au séjour"
        }
    ];

    const marsVideos = [
        {
            title: "Vidéo la plus vue — 492 896 vues",
            desc: "Le format ayant généré le plus de vues sur le compte.",
            video: "assets/videos/missionmars-1.mp4",
            poster: "assets/images/missionmars-1-poster.jpg"
        },
        {
            title: "Meilleur taux d'engagement",
            desc: "Vidéo enregistrant le meilleur rapport entre interactions et vues.",
            video: "assets/videos/missionmars-2.mp4",
            poster: "assets/images/missionmars-2-poster.jpg"
        },
        {
            title: "Dernière publication",
            desc: "Dernière vidéo publiée avant la fin de ce projet personnel.",
            video: "assets/videos/missionmars-3.mp4",
            poster: "assets/images/missionmars-3-poster.jpg"
        }
    ];

    /* ========================================================================
       GÉNÉRATION DES CARTES
       ======================================================================== */

    function renderVideoCard(videoData) {
        const chips = videoData.chips
            .map(function (chip) {
                return '<span class="chip">' + chip + "</span>";
            })
            .join("");

        return [
            '<article class="video-card">',
            '  <div class="video-frame">',
            '    <video controls preload="none" playsinline poster="' + videoData.poster + '">',
            '      <source src="' + videoData.video + '" type="video/mp4">',
            "    </video>",
            "  </div>",
            '  <div class="video-body">',
            "    <h3>" + videoData.title + "</h3>",
            "    <p>" + videoData.desc + "</p>",
            '    <div class="video-meta">' + chips + "</div>",
            "  </div>",
            "</article>"
        ].join("");
    }

    function renderMarsCard(videoData) {
        return [
            '<article class="mars-card reveal">',
            '  <div class="mars-frame">',
            '    <video controls preload="none" playsinline poster="' + videoData.poster + '">',
            '      <source src="' + videoData.video + '" type="video/mp4">',
            "    </video>",
            "  </div>",
            '  <div class="mars-body">',
            "    <h3>" + videoData.title + "</h3>",
            "    <p>" + videoData.desc + "</p>",
            "  </div>",
            "</article>"
        ].join("");
    }

    function renderPostCard(postData) {
        return [
            '<article class="post-card reveal">',
            '  <div class="post-frame">',
            '    <img src="' + postData.img + '" alt="' + postData.alt + '" loading="lazy" decoding="async">',
            "  </div>",
            '  <div class="post-body">',
            '    <span class="card-badge">Concept graphique</span>',
            "    <h3>" + postData.title + "</h3>",
            "    <p>" + postData.desc + "</p>",
            "  </div>",
            "</article>"
        ].join("");
    }

    function mountCards() {
        const carouselTrack = document.getElementById("carouselTrack");
        const marsGrid = document.getElementById("marsGrid");
        const postRow = document.getElementById("postRow");

        if (carouselTrack) {
            carouselTrack.innerHTML = tourismeVideos
                .map(renderVideoCard)
                .join("");
        }

        if (marsGrid) {
            marsGrid.innerHTML = marsVideos
                .map(renderMarsCard)
                .join("");
        }

        if (postRow) {
            postRow.innerHTML = posts
                .map(renderPostCard)
                .join("");
        }
    }

    /* ========================================================================
       VIDÉO DU HERO
       La tentative de lecture automatique existante est conservée.
       Aucun attribut de chargement ou de lecture du média n'est modifié ici.
       ======================================================================== */

    function initHeroVideo() {
        const heroVideo = document.querySelector(".hero-media video");

        if (!heroVideo) {
            return;
        }

        heroVideo.muted = true;

        function startHeroVideo() {
            const playAttempt = heroVideo.play();

            if (
                playAttempt &&
                typeof playAttempt.catch === "function"
            ) {
                playAttempt.catch(function () {
                    /*
                      Certains navigateurs peuvent refuser l'autoplay. Le contenu reste
                      accessible et une nouvelle tentative est faite à la première
                      interaction tactile, comme dans le site d'origine.
                    */
                });
            }
        }

        startHeroVideo();

        window.addEventListener("touchstart", startHeroVideo, {
            once: true,
            passive: true
        });
    }

    /* ========================================================================
       MENU MOBILE
       ======================================================================== */

    function initBurgerMenu() {
        const burger = document.getElementById("burgerBtn");
        const navLinks = document.getElementById("navLinks");

        if (!burger || !navLinks) {
            return;
        }

        function isOpen() {
            return navLinks.classList.contains("open");
        }

        function updateMenuState(open) {
            navLinks.classList.toggle("open", open);
            burger.setAttribute("aria-expanded", open ? "true" : "false");
            burger.setAttribute(
                "aria-label",
                open ? "Fermer le menu" : "Ouvrir le menu"
            );
        }

        function closeMenu(options) {
            const settings = options || {};

            if (!isOpen()) {
                updateMenuState(false);
                return;
            }

            updateMenuState(false);

            if (settings.returnFocus) {
                burger.focus();
            }
        }

        burger.addEventListener("click", function () {
            updateMenuState(!isOpen());
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                closeMenu();
            });
        });

        document.addEventListener("click", function (event) {
            if (!isOpen()) {
                return;
            }

            const clickedInsideMenu = navLinks.contains(event.target);
            const clickedBurger = burger.contains(event.target);

            if (!clickedInsideMenu && !clickedBurger) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && isOpen()) {
                closeMenu({ returnFocus: true });
            }
        });

        const desktopMediaQuery = window.matchMedia
            ? window.matchMedia("(min-width: 861px)")
            : null;

        function handleViewportChange(event) {
            if (event.matches) {
                closeMenu();
            }
        }

        if (desktopMediaQuery) {
            if (typeof desktopMediaQuery.addEventListener === "function") {
                desktopMediaQuery.addEventListener("change", handleViewportChange);
            } else if (typeof desktopMediaQuery.addListener === "function") {
                desktopMediaQuery.addListener(handleViewportChange);
            }
        }

        updateMenuState(false);
    }

    /* ========================================================================
       ANIMATIONS REVEAL
       Le contenu reste visible si JavaScript ou IntersectionObserver échoue.
       ======================================================================== */

    function showAllRevealElements() {
        document.querySelectorAll(".reveal").forEach(function (element) {
            element.classList.add("in");
        });
    }

    function initRevealOnScroll(prefersReducedMotion) {
        const revealElements = document.querySelectorAll(".reveal");

        if (!revealElements.length) {
            return;
        }

        if (
            prefersReducedMotion ||
            !("IntersectionObserver" in window)
        ) {
            showAllRevealElements();
            return;
        }

        /*
          Cette classe n'est ajoutée que lorsque JavaScript et
          IntersectionObserver sont disponibles. Sans elle, les contenus sont
          visibles par défaut grâce au CSS.
        */
        document.documentElement.classList.add("reveal-ready");

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            if (element.classList.contains("in")) {
                return;
            }

            observer.observe(element);
        });
    }

    /* ========================================================================
       COMPTEURS MISSION MARS
       Les valeurs proviennent exclusivement des attributs data-target du HTML.
       ======================================================================== */

    function formatNumber(number) {
        return number.toLocaleString("fr-FR");
    }

    function getCounterData(element) {
        const target = Number.parseInt(
            element.getAttribute("data-target"),
            10
        );

        return {
            target: Number.isFinite(target) ? target : 0,
            suffix: element.getAttribute("data-suffix") || ""
        };
    }

    function displayFinalCounterValue(element) {
        const counterData = getCounterData(element);

        element.textContent =
            formatNumber(counterData.target) + counterData.suffix;
    }

    function animateCount(element, prefersReducedMotion) {
        const counterData = getCounterData(element);

        if (
            prefersReducedMotion ||
            typeof window.requestAnimationFrame !== "function" ||
            typeof window.performance === "undefined"
        ) {
            displayFinalCounterValue(element);
            return;
        }

        const duration = 1400;
        const startTime = window.performance.now();

        function tick(currentTime) {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(
                easedProgress * counterData.target
            );

            element.textContent =
                formatNumber(currentValue) + counterData.suffix;

            if (progress < 1) {
                window.requestAnimationFrame(tick);
            } else {
                displayFinalCounterValue(element);
            }
        }

        window.requestAnimationFrame(tick);
    }

    function initStatCounters(prefersReducedMotion) {
        const statNumbers = document.querySelectorAll(".stat .num");

        if (!statNumbers.length) {
            return;
        }

        if (
            prefersReducedMotion ||
            !("IntersectionObserver" in window)
        ) {
            statNumbers.forEach(displayFinalCounterValue);
            return;
        }

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateCount(entry.target, false);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        statNumbers.forEach(function (element) {
            observer.observe(element);
        });
    }

    /* ========================================================================
       CARROUSEL
       Le scroll natif tactile et le scroll-snap restent gérés par le CSS.
       ======================================================================== */

    function initCarousel(prefersReducedMotion) {
        const container = document.getElementById("carouselContainer");
        const track = document.getElementById("carouselTrack");
        const previousButton = document.getElementById("arrowPrev");
        const nextButton = document.getElementById("arrowNext");

        if (
            !container ||
            !track ||
            !previousButton ||
            !nextButton
        ) {
            return;
        }

        const cards = Array.from(
            track.querySelectorAll(".video-card")
        );

        if (!cards.length) {
            previousButton.classList.add("is-hidden");
            nextButton.classList.add("is-hidden");
            return;
        }

        function updateArrowState() {
            const maximumScroll = Math.max(
                0,
                track.scrollWidth - track.clientWidth
            );

            previousButton.classList.toggle(
                "is-hidden",
                track.scrollLeft <= 4
            );

            nextButton.classList.toggle(
                "is-hidden",
                maximumScroll <= 4 ||
                track.scrollLeft >= maximumScroll - 2
            );
        }

        function scrollByPage(direction) {
            const trackStyles = window.getComputedStyle(track);
            const rawGap =
                trackStyles.columnGap ||
                trackStyles.gap ||
                "0";

            const gap = Number.parseFloat(rawGap) || 0;
            const firstCardWidth =
                cards[0].getBoundingClientRect().width;

            if (!firstCardWidth) {
                return;
            }

            const cardStep = firstCardWidth + gap;
            const visibleCardCount = Math.max(
                1,
                Math.round(track.clientWidth / cardStep)
            );

            track.scrollBy({
                left: direction * cardStep * visibleCardCount,
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });
        }

        nextButton.addEventListener("click", function () {
            scrollByPage(1);
        });

        previousButton.addEventListener("click", function () {
            scrollByPage(-1);
        });

        track.addEventListener("scroll", updateArrowState, {
            passive: true
        });

        window.addEventListener("resize", updateArrowState);

        updateArrowState();
    }

    /* ========================================================================
       ANNÉE DU FOOTER
       ======================================================================== */

    function initCurrentYear() {
        const currentYear = document.getElementById("currentYear");

        if (!currentYear) {
            return;
        }

        currentYear.textContent = String(
            new Date().getFullYear()
        );
    }

    /* ========================================================================
       IMPRESSION DE LA PAGE DE RÉTRACTATION
       La page reste imprimable sans JavaScript depuis le navigateur.
       ======================================================================== */

    function initPrintButton() {
        const printButton = document.querySelector(
            "[data-print-button]"
        );

        if (!printButton) {
            return;
        }

        printButton.addEventListener("click", function () {
            window.print();
        });
    }

    /* ========================================================================
       INITIALISATION ROBUSTE
       Chaque composant est indépendant afin qu'une page dépourvue de
       carrousel, vidéo, compteur ou cartes ne produise aucune erreur.
       ======================================================================== */

    function safelyRun(callback) {
        try {
            callback();
        } catch (error) {
            /*
              Le contenu principal doit rester accessible si un composant
              facultatif ne peut pas être initialisé.
            */
        }
    }

    function init() {
        const prefersReducedMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        safelyRun(mountCards);
        safelyRun(initHeroVideo);
        safelyRun(initBurgerMenu);
        safelyRun(function () {
            initRevealOnScroll(prefersReducedMotion);
        });
        safelyRun(function () {
            initStatCounters(prefersReducedMotion);
        });
        safelyRun(function () {
            initCarousel(prefersReducedMotion);
        });
        safelyRun(initCurrentYear);
        safelyRun(initPrintButton);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, {
            once: true
        });
    } else {
        init();
    }
})();
