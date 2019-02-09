---
layout: projectsite
categories: starters
title: Pedal Power Generator
topic: Pedal Power Generator
sub-topic: Collaboration with Arc@UNSW Bike-ology
location: UNSW Art & Design
completedate: 30 August 2015
author: Austin Kong, Yunzhen Zhang
date: 2015-08-30 00:00:00 +1000
teamlogo: /images/logos/create-starters.png
image: /images/bikeology2.jpg
slug: pedal-power-generator
link:
---

CREATE partnered up with Bike-ology to develop a pedal-power generator. Bike-ology is a free Arc @ UNSW service where students come together to learn skills on bike repair and maintenance.

The pedal power generator features an old motor from an electric scooter attached to a used bike frame. A bike chain links the gears of the bike frame and motor together.

When pedalling, the magnets inside the motor will spin and low voltage AC (alternating current) electricity is produced at the output. This AC electricity is fed through a full bridge rectifier, which is an electrical circuit that converts AC to DC (direct current) electricity.

 <img src="/images/bikeology1.jpg" class="contentimg">
 <img src="/images/bikeology3.jpg" class="contentimg">
 Experiment has shown the motor-turned-generator can produce maximum 50V DC when pedalled at Tour de France cyclist speed!

This 50V DC voltage is stepped down to 12V using a DC-DC Buck converter. 12V was chosen as we use car cigarette sockets for the appliances to plug in. We made it such that anything that you can put into the cigarette plug of your car - whether it’d be a phone charging cable or drinks cooler - you can do the same with the pedal power generator.

Two capacitors were put in parallel with the 12V output from the DC-DC Buck converter. This is to ensure the generator circuit do not ‘switch’ on and off too fast as doing that may cause damage to the electronic devices plugged into the generator.

An UNO R3 microcontroller and current sensor was used to control the LED strip which adorns the bike frame. The current sensor detects the amount of current flowing in the whole circuit, and current flow is proportional to the speed at which you’re pedalling. If the value being read from the current sensor is high, the lights on the LED strip will transition from blue to red.

The power output of the pedal power generator is estimated to be around 100W. The bike is able to charge phones, power the aforementioned LED lights, and run a small drinks cooler. It has been featured in several internal UNSW events such as Stress Less Week, and First Friday: Bespoke City at UNSW Art & Design.

 <p>You can view the progress video <a href ="https://www.facebook.com/CreateUnsw/videos/483971138445013/?permPage=1" target="_blank"> here</a></p>
 