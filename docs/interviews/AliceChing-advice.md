_Alice is currently working as a lead developer on Wattam at Funomena, where she helps her teammates stretch the capabilities of Unity. She has experienced large and small company environments, working at companies like Visceral Games, Sanzaru, and Google. Some of her past projects include Sly Cooper: Thieves in Time at Sanzaru Games and Godfather II at Visceral Games._

Advice (_not_ verbatim):



*   Engines will differ depending on the genre, but more can be shared than it seems.
    *   Visceral Games had two forks[^1] from the Godfather Engine, one for _Dead Space_ (a survival horror game), and one for _Godfather II_ (an open-world game). Each team modified their fork based on their needs.
    *   Other technologies can typically still be shared across different game genres, like tools and optimizations.
    *   Determining which technologies to merge and share across projects becomes an important subject, and much of the responsibility for this is on the technical leads.
*   Code reviews are time-consuming, but important for many different parts of a project.
    *   Some studios like EA use code reviews before every submission to ensure the quality of the code is up to snuff.
    *   At Funomena, the Wattam team is using them as a way to sanity check[^2] our code.
    *   Code reviews most significantly help with proper commenting, readability, reduction of bad habits, and clearing up misunderstandings in complex functions and systems.
    *   Breaking all of your changes into tiny submissions helps make the code review process easier for the team.
*   It's okay not to know everything, and it will actually be common on a game engine team.
    *   At large companies, you will typically only communicate with your immediate peers, so it's hard to know about the problems that other teams are facing.
    *   If you are only familiar with certain pieces of the engine that you've been working 
    *   on, that prevents you from reworking and over-optimizing your code.
    *   Working on a game engine team, you also learn to let go of refactoring any "bad" code unless it's legitimately broken.
    *   You learn to let go of refactoring "bad" code unless it is actually broken.
*   Bring QA in, especially if you're working on more than 3 systems
    *   If you have data-driven pipelines, debugging and ensuring correct patches is even more difficult because you can't tell from the code that something else in the engine depends on particular parameters.
    *   Having developers test parts of the game that they don't work on can help you gain perspective on the bigger picture and wrap your head around such a complex system.

[^1]: A **project fork **is a when developers take a copy of source code from one software package and develop on it independent from the original.

[^2]: A **sanity check** is a basic test to quickly evaluate whether a result can possibly be true or correct.