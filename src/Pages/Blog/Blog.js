import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-4xl font-bold p-5 text-purple-500">
          What are the different ways to manage a state in a React application?
        </h2>
        <h6 className=" text-xl font-bold text-pink-600">
          There are four main types of state you need to properly manage in your
          React apps: Local state, Global state, Server state and URL
          state.Local (UI) state – Local state is data we manage in one or
          another component. Local state is most often managed in React using
          the useState hook. For example, local state would be needed to show or
          hide a modal component or to track values for a form component, such
          as form submission, when the form is disabled and the values of a
          form’s inputs. Global (UI) state – Global state is data we manage
          across multiple components. Global state is necessary when we want to
          get and update data anywhere in our app, or in multiple components at
          least. A common example of global state is authenticated user state.
          If a user is logged into our app, it is necessary to get and change
          their data throughout our application. Sometimes state we think should
          be local might become global. Server state – Data that comes from an
          external server that must be integrated with our UI state. Server
          state is a simple concept, but can be hard to manage alongside all of
          our local and global UI state.
        </h6>
      </div>
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-4xl font-bold p-5 text-purple-500">
          How does prototypical inheritance work?
        </h2>
        <h6 className=" text-xl font-bold text-pink-600">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </h6>
      </div>
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-4xl font-bold p-5 text-purple-500">
          {" "}
          What is a unit test? Why should we write unit tests?
        </h2>
        <h6 className=" text-xl font-bold text-pink-600">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </h6>
      </div>
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-4xl font-bold p-5 text-purple-500">
          React vs. Angular vs. Vue?
        </h2>
        <h6 className=" text-xl font-bold text-pink-600">
          Angular has a steep learning curve, considering it is a complete
          solution, and mastering Angular requires you to learn associated
          concepts like TypeScript and MVC. Even though it takes time to learn
          Angular, the investment pays dividends in terms of understanding how
          the front end works.
        </h6>
        <h6 className=" text-xl font-bold text-pink-600">
          React offers a Getting Started guide that should help one set up React
          in about an hour. The documentation is thorough and complete, with
          solutions to common issues already present on Stack Overflow. React is
          not a complete framework and advanced features require the use of
          third-party libraries. This makes the learning curve of the core
          framework not so steep but depends on the path you take with
          additional functionality.
        </h6>
        <h6 className=" text-xl font-bold text-pink-600">
          Vue provides higher customizability and hence is easier to learn than
          Angular or React. Further, Vue has an overlap with Angular and React
          with respect to their functionality like the use of components. Hence,
          the transition to Vue from either of the two is an easy option
        </h6>
      </div>
    </div>
  );
};

export default Blog;
