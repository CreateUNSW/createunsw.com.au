---
title: About
subtitle: Student-Led / Project Starters / Maker Club
description: "We provide opportunities for people to learn practical skills in engineering, invention and design, and collaborate on ideas and projects..."
image: /images/20180410_CREATE_UAS_TestFly-0001.jpg
---
## Your Student-Led Maker Club in UNSW Sydney

Founded in October 2012. The core aim of CREATE is to provide opportunities for students to learn practical skills in engineering, innovation, and design as well as collaborate on shared ideas and projects. By maintaining an active community of like-minded ‘makers’ and providing resources, knowledge and technology, the club seeks to foster an environment where anyone, regardless of their background or degree, can be inspired to turn their ideas into designs, prototypes and products. We are firm believers in collective knowledge, learning and cooperation as an effective way to expand what is possible for any individual to accomplish.

CREATE runs an array of activities to further this ideal, hosting a series of workshops teaching basic technical skills in Arduino, electronics, programming, CAD, and digital fabrication. CREATE operates a weekly electronics stall to supply students with the parts they need for projects big or small. CREATE facilitates a number of projects including the QUT Robotic Club's Droid Racing Competition and Sumobots in collaboration with UNSW MTRNSoc. UNSW Illuminate and Flight Labs UNSW both started as CREATE projects and have since grown into their own independent organisations.

SECTION

## Our Achievements

<div class="row row-cols-1 row-cols-md-3">
    {% for card in site.data.achievements %}
    <div class="col mb-4">
        <div class="card h-100 bg-light text-center shadow">
            <img src="/images/icons/{{ card.icon }}" class="card-img-top svg-icon" alt="{{ card.alt }}">
            <div class="card-body">
                <h3 class="card-title">{{ card.title }}</h3>
                <p class="card-text">{{ card.description }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</div>