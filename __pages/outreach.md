---
title: Outreach
subtitle: Inspiring young makers and students
image: /images/IMG_2015_03_26_18_03_23_09338.JPG
btn-name: Contact Us
btn-url: /contact
---
CREATE hosts an Outreach Program that aims to inspire younger students with the practical applications of STEMs learning. Our team runs a select few set of workshops that teach basic technical skills, and do not require any prior knowledge.

Our workshops are written to adapt well with whatever requirements your school needs.

It is important to note that since our team runs completely by university students, our availability may be limited by exam periods defined by UNSW Sydney **below** or other major deadlines in our projects.

SECTION

## UNSW Sydney exams periods in 2022

- 29 Apr - 12 May
- 12 Aug – 25 Aug
- 25 Nov – 8 Dec

For more information, please email us at [{{ site.email }}](mailto:{{site.email}}).

SECTION

## We host the following outreach program

<div class="row row-cols-1 row-cols-md-2">
    {% for card in site.data.outreach-events %}
    <div class="col mb-4">
        <div class="card h-100 shadow">
            <img src="{{ card.image }}" class="card-img-top" alt="{{ card.alt }}">
            <div class="card-body">
                <h3 class="card-title">{{ card.title }}</h3>
                {% for item in card.description %}
                <p class="card-text">{{ item }}</p>
                {% endfor %}
            </div>
        </div>
    </div>
    {% endfor %}
</div>