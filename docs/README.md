**Design Document for:**

puppy-g
=======

***One puppy, One dream, Infinite Opportunities***

“Smell, Taste, or Eat!”™

All work Copyright ©2016
by Who Are We?

Written by All of us

Version \# 1.0

Wednesday, November 16, 2016

Table of Contents
=================

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Design History](#design-history)
- [Game Overview](#game-overview)
  - [Philosophy](#philosophy)
    - [Something fresh](#something-fresh)
    - [Something cute](#something-cute)
    - [Stay in the mobile world](#stay-in-the-mobile-world)
  - [Common Questions](#common-questions)
    - [What is the game?](#what-is-the-game)
    - [Why create this game?](#why-create-this-game)
    - [Where does the game take place?](#where-does-the-game-take-place)
    - [What do I control?](#what-do-i-control)
    - [How many characters do I control?](#how-many-characters-do-i-control)
    - [What is the main focus?](#what-is-the-main-focus)
    - [What’s different?](#whats-different)
- [Feature Set](#feature-set)
  - [General Features](#general-features)
  - [Gameplay](#gameplay)
- [The Game World](#the-game-world)
  - [Overview](#overview)
  - [Simple Environment](#simple-environment)
  - [Colorful](#colorful)
  - [The Physical World](#the-physical-world)
    - [Key Locations](#key-locations)
    - [Travel](#travel)
    - [Scale](#scale)
    - [Objects](#objects)
    - [Weather](#weather)
    - [Day and Night](#day-and-night)
    - [Time](#time)
  - [Rendering System](#rendering-system)
    - [Overview](#overview-1)
    - [2D/3D Rendering](#2d3d-rendering)
  - [Camera](#camera)
  - [Game Engine](#game-engine)
    - [Overview](#overview-2)
    - [Tilemapping](#tilemapping)
- [The World Layout](#the-world-layout)
  - [Overview](#overview-3)
- [Controls](#controls)
  - [World](#world)
  - [Menu](#menu)
  - [Battle](#battle)
- [Game Characters](#game-characters)
  - [Main Character](#main-character)
  - [Enemies and Monsters](#enemies-and-monsters)
- [User Interface](#user-interface)
  - [Overview](#overview-4)
- [Weapons](#weapons)
  - [Overview](#overview-5)
- [Musical Scores and Sound Effects](#musical-scores-and-sound-effects)
  - [Overview](#overview-6)
- [Single-Player Game](#single-player-game)
  - [Overview](#overview-7)
  - [Story](#story)
  - [Victory Conditions](#victory-conditions)
- [Character Rendering](#character-rendering)
  - [Overview](#overview-8)
- [Extra Miscellaneous Stuff](#extra-miscellaneous-stuff)
  - [Overview](#overview-9)
  - [Ideas](#ideas)
- [Objects Appendix](#objects-appendix)
- [Story Appendix](#story-appendix)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Design History
==============

This is a brief explanation of the history of this document.

This document is meant to house the concepts and designs for “puppy-g”
for all developers. It will be the go to location to answer questions
and provide final design decisions made by the team.

Version 1.0
-----------

Version 1.0 is the skeleton for the Game Design Document (GDD).

1.  Initial layout of the GDD. It will grow over time.

2.  Creating areas to put final design decisions.

Version 1.1
-----------

1.  Added section for controls.

Game Overview
=============

Philosophy
----------

### Something fresh

We are aiming for something new in the RPG world, while trying to relate
a fantasy world to real life as much as possible. Not so much that it is
boring, but from a different perspective of what we see every day.

### Something cute

Puppies running around in the world? How cute is that.

### Stay in the mobile world

Mobile gaming it still a huge market. Browsers are, for the most part,
the same amongst all OS versions and phone types, so it is easier to
reach a wider market.

Common Questions
----------------

### What is the game?

The game is focused on a puppy exploring the world. The protagonist will
join up with other puppy comrades and take on the world, as a puppy
would. Eat random things, lick everything you see, start fights just
because, you name it, you are a puppy!

### Why create this game?

We all keep coming up with great ideas so it’s about time we actually go
through with one of them. Let’s face it, who wouldn’t want to run around
as a puppy?

### Where does the game take place?

In a fantasy world is much like our own.

### What do I control?

A puppy!

### How many characters do I control?

Just one, while in the world navigation. During battle sequences, you
will control the actions of your comrades.

### What is the main focus?

Discover the world the way a puppy would.

### What’s different?

You are a puppy. Nuff said.

Feature Set
===========

General Features
----------------

Puppies

Continuous world

2D overhead graphics

Browser support

Tilemapped gameplay

Gameplay
--------

Solving puzzles with
basic skills (smell, lick, chew, etc.)

Building relationships with other puppies

Fighting through bad guys to keep crew safe (cats, squirrels, socks)

Doghouse customization – make the biggest, best doghouse in the world

The Game World
==============

Overview
--------

There are towns, caves, doghouses, forests, grasslands, etc. It is to be
a simple environment, pleasant to walk around in and not very
intimidating. The colors will be bright and vivid, but not too
overwhelming. Think early Zelda games, fresh greens and deep blues.

Simple Environment
------------------

The environment will contain just the basic elements needed to create a
world:

-   Towns: Sidewalks, roads, and small, simplistic buildings.

-   Outdoors: Grass, trees, stones, and some water.

-   Caves: Rocks, rocks, and rocks.

Anything more and it gets too busy. The point of the game is to
investigate, and the player should not waste time trying to investigate
the static background elements.

Colorful
--------

Fun, vivid coloring.

The Physical World
------------------

The following describes the key components of the physical world.

### Key Locations

-   **Doghouse** The protagonist’s house. This house will be
    customizable and upgradeable.

-   **Towns** Places of business and meeting new comrades.

-   **Grasslands** The adventurous part of the world. Many puzzles and
    treasures can be discovered.

-   **Caves** The “dangerous” part of the world. The most dangerous
    enemies will be found here.

### Travel

Travel on foot throughout the world. Fast travel between towns.

### Scale

Overhead view, the puppies are roughly the same size as house entrances
and the houses themselves are a few cells large on the outside, but much
bigger on the inside.

### Objects

Soooooo many objects. What is trash to us is treasure to a puppy.

See the “Objects Appendix” for a list of all the objects found in the
world.

### Weather

TBD. Puppies hate rain…

### Day and Night

TBD.

### Time

TBD.

Rendering System
----------------

### Overview

The world gameplay is overhead, 2d graphics. The battle sequences are
TBD.

### 2D/3D Rendering

Browser (Canvas, WebGL).

Camera
------

Camera will be fixed on the player in the world and fixed in one
location during battle sequences.

Game Engine
-----------

### Overview

Made with the Phaser game engine for modern web browsers.

### Tilemapping

The world gameplay is tilemapped. Each location will have its own
tilemap and fade out transitions:

-   World to house

-   House to world

-   World to cave

-   Cave to world

-   World to world

-   House to house

-   Cave to cave

The World Layout
================

Overview
--------

TBD with screenshots.

Controls
========
Since this is a mobile game, the controls will need to be based heavily on gestures.

World
-----
How will the player mover around the world?
* Tap to move to location?
* Press and hold edges of screen to move?
* Simulate a joystick?
* Swipe to move?

Menu
----
Standard click to select, swipe to scroll.

Battle
------
Will the battle sequences be gesture based?

Game Characters
===============

Main Character
--------------

Choose from a selection of breeds and genders. Customize color and leash
type/color.

Enemies and Monsters
--------------------

-   **Cats** The generic enemy of puppies.

-   **Squirrels** They don’t attack, but really anger you.

-   **Socks** These can incapacitate you, and you have no idea why.

-   **Animal control** The bosses, avoid these at any cost.

-   etc…

User Interface
==============

Overview
--------

TBD with screenshots.

Weapons
=======

Overview
--------

TBD…

Musical Scores and Sound Effects
================================

Overview
--------

TBD…

Single-Player Game
==================

Overview
--------

Single player throughout. AI will assist for NPCs and enemies.

Story
-----

Brief story summary here.

See “Story Appendix” for more details.

Victory Conditions
------------------

TBD…

Character Rendering
===================

Overview
--------

Because the puppies can be customized, we need to come up with a design
strategy to enable quick attaching/detaching of elements.

Extra Miscellaneous Stuff
=========================

Overview
--------

Drop anything you are working on and don’t have a good home for here.

Ideas
-----

-   Ideas!

Objects Appendix
================

All the objects…


Story Appendix
==============

Write the story here!
