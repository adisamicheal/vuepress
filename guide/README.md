# Guide

All these blablabla stuuf shit should stop mhen

## Other Considerations
We’ll start off with an introduction to TDD. I’ll go through that quite quickly because I guess most of you reading this are already doing that. Then, I’ll spend a little more time on BDD and then deal with the contradictions between the two, before getting slightly more philosophical with xDD.

## Watch out
This is the classic TDD cycle, popularized in Nat Pryce and Steve Freeman’s book ‘Growing Object-Oriented Software, Guided by Tests’. It’s generally described as ‘write a failing test’ and then make the test pass and then refactor; you continue in this loop. This is the TDD cycle – it’s really simple. It’s got three little statements; it’s got coloured arrows that go between them. But within that, there’s a lot of complexity or at least a lot of nuance.

## Stuffs
Here is another way of thinking about it. While ‘write a failing test’ is procedurally correct, it’s also rather confusing because that’s not what you’re attempting to do; the idea is not to write a failing test. What you’re trying to do is imagine what the next step you want to make is to evolve the implementation that you need to deliver value. It’s quite often rewritten as ‘writing the next specification’. Essentially, your next test is your next specification of how the software should behave and because you haven’t done that yet, it’s going to fail but you’re not there writing a failing test.

## Considerations 
The second step is to make it pass quickly. The intention is not to design everything perfectly; it’s to get that test passing. Your collection of tests go from failing to all passing and now that all of your tests are passing, it’s safe to refactor. The intention here is not to get the best design; it’s to get them all to green quickly, because now they’re all green, you can look at them and go ‘how do I want to improve this design?’ and you can safely improve the design through the refactoring.

## Technical
The third thing is refactoring. The refactor loop in Nat and Steve’s book is actually a cycle. You can draw it many other ways, but the idea is you don’t just go in and refactor and you’re done; you go in, you look and see what you would like to change and change it. You make sure the test is still green and you look at it again and say ‘is there another change that I want to do?’ or ‘has that refactoring introduced another thing that I want to do?’. This is a multi-process in itself; it’s not a single step.

## Refactor
One thing to dwell on very briefly is the word ‘refactor’ because when I talk to developers ‘refactor’ is often misunderstood. When you’re refactoring, you are not changing the behaviour of the code. You never refactor to add a new piece of functionality. You might refactor to get the codebase into a state where you want it to be so that you can add a new piece of functionality but:

## BDD Explained
TDD as I explained quite quickly is quite contained.
BDD, however, is extremely uncontained; it’s sort of weird. No one is quite sure what it means. Matt Wynne who works with me at Cucumber Limited and has been working BDD for a while, has tried to distill its essence. He’s come up with this sentence.

## Collaborate
The first is to get developers, testers and people from the business to talk to each other. That is the beginning of BDD. Anyone who thinks "we’re doing BDD because we use ‘Given’, ‘When’, ‘Then’" often aren't. ‘Given’, ‘When’, ‘Then’ has nothing to do with BDD. BDD stands for Behaviour-Driven Development and the real intent is to try and work out what your customer or business wants from the software before you start working on it. The first way of doing this is to actually collaborate with those people.

## Automate
The second thing, once we’ve got that collaboration, is to somehow record that in a way that is meaningful to anybody reviewing it, who might come around and look at it later, who might want to comment on it. Typically, that gets done using a ubiquitous language. People often use the ‘Given’, ‘When’, ‘Then’ words but that’s not necessary. The idea is that we’ve collaborated and this is shared understanding. This has made sure there is a collaborative goal that we’re trying to achieve and once we’ve got good at collaborating, it’s worth trying to capture that so that not everybody needs to be in the room at the same time, so that that shared learning can be propagated.

## Cucumber
Matt and I both work for Cucumber Ltd but in his definition there is no mention of Cucumber anywhere. Cucumber is not part of BDD. Cucumber is something that has been created to help people automate in a specific way. If I go back to Nat and Steve’s book they just use JUnit throughout their book to automate acceptance tests. It depends entirely on your organization – how you want to practise BDD.

The classic way, using Cucumber and SpecFlow and any other tool that uses a semi-structured syntax called Gherkin, is to record and define those specifications. You eventually end up with what are called feature files.

## Examples
Above is an example of a feature file. It has a name at the top saying what the feature is, it’s got some text which tells you what the behaviour or the acceptance criteria is and below it has a number of scenarios that show how the system behaves given certain situations. The important thing here is that the examples that you might come up with when you’re collaborating get recorded as the scenarios. The acceptance criteria, which are the rules, the way the system should be behaving are captured in the text at the top and the important thing here is that user stories, which a lot of Agile teams get very hung up on, are just rubbish at the end of the implementation and should be bent.

## Essential Difference
There is no essential difference between them. What holds them together is that they all require a group of people, specifying how the software should behave, collaboratively, before implementing it. That’s the important bit, so maybe that’s what we should boil the BDD definition down to. The idea is to work from the outside, thinking about how we want to pave, we use examples to make sure that everybody on the team understands what we’ve just agreed on – concrete examples with concrete data – and we write these examples in a ubiquitous language – a language using terms that derive from the business domain that are understood, unambiguously, by everybody on the team.

## Design your tests
The "xDD" question. What is it all about? The reason it’s called ‘Test-Driven’ or ‘Behaviour-Driven’ or ‘Acceptance Test-Driven’ is that you have to specify the behaviour before you do the implementation. There is no ‘we sort of do Behaviour-Driven’, ‘we sort of do Test-Driven’, ‘we write the tests in the same sprint’. You have to write them first. That’s what drives them, that’s how it becomes a design process. It’s the failing specification, it’s the fact that you see it fail, which is driving you to do the implementation. That’s what pushes the developer; that’s what the developer uses to write the code.

## Conclusions
BDD, TDD, ATDD, Specification by Example – they’re all the same. They work from the outside in, they use examples to specify how the system should behave, those examples are then expressed in a ubiquitous language that the whole team understands, including the non-technical members, and then, once you’ve automated it, you get verification, which means that you can tell when your documentation is up to date, it means that you know when a regression has crept in, it means you can see how much of the system has been implemented by the development team.