
// # TypeDoc Tutorial

// In this tutorial you will learn how to document your [TypeScript](https://www.typescriptlang.org/) 
// projects using [TypeDoc](http://typedoc.org/), a tool that will extract descriptions from your TypeScript 
// source comments and generate a well organized and pretty HTML documentation. 

// It is required that you know the basics of TypeScript, but besides that, this tutorial will start from scratch. 


// ## Table of Contents

// <div id="generated-toc"></div>

// ## TypeDoc Introduction

// TypeDoc is an API documentation generator for TypeScript projects, similar 
// to [jsdoc](http://usejsdoc.org/) or [javadoc](https://en.wikipedia.org/wiki/Javadoc).

// Basically, you add documentation comments directly to your source code, right alongside the code 
// itself. The TypeDoc tool will scan your source code and generate an HTML documentation website for you.

// Although configurable, TypeDoc will generate documentation of everything in your source, 
// even things that are not documented. 

// For adding descriptions of some entity in the code you must use special comments that must be placed 
// immediately *before* the code being documented. Each comment must start with a `/**` sequence in order 
// to be recognized by TypeDoc. Comments beginning with `//`, `/*`, `/***`, or more than 3 stars will be ignored. 

// The simplest documentation is just a description:



/** This is a description of the class Fruit */
class Fruit {

}

// Here you can see the output generated by TypeDoc: [classes/fruit.html](../../classes/fruit.html).

// ## Classes and Interfaces

//  * say that if you are working with interfaces, then you want to document interfaces instead of classes

// TODO


// ## Methods and Functions

// TODO

// ## Ignoring things

// If we don't want some class method or other entity to appear at all in TypeDoc output we use the `@hidden` tag. 

// In the following example, the output will only contain `method2()` but not `method1()``: 



interface SomeThingsAreIgnored {
  /**
   * @hidden
   * this comment should be ignored
   * 
   */
  method1():Promise<void>;
  /**
   * this comment shouldn't be ignored
   */
  method2():string;
}

// Here you can see the output generated by TypeDoc: [interfaces/somethingsareignored.html](../../interfaces/somethingsareignored.html).

// **Important: Put `@hidden` at the very top of the comment related to the entity you want to ignore. 

// The following example makes TypeDoc to ignore the whole class: 


/** @hidden */
export class ClassTotallyIgnored {
  color:string;
}

// Here you can see the output generated by TypeDoc: [classes/classtotallyignored.html](../../classes/classtotallyignored.html).



// ## Modules

// TODO


// ## Events

// TODO





// <script src="https://cancerberosgx.github.io/raphaeljs-tutorial/generated_toc.js"></script>
// <style>
// h1, h2, h3, h4, h5, h6{
//   text-transform: none;
// }</style>
