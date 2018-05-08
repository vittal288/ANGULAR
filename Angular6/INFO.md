# Angular 6 Features

#### 1.1 Angular Elements :
This is a big feature of angular world, because earlier we used to create web components using polymer and other JS frameworks to create but now with **angular 6** we can create web components using *@angular/elements* and can be inject to any of web pages like wordpress, ruby and many others by inject just scritpt tag ```<scrit src="some-code.js">``` and component name ```<my-comp-name><my-comp-name>``` in the html page  

[How to create Angular Custom Elements using @angular/material](https://www.youtube.com/watch?v=4u9_kdkvTsc)

####  1.2 Schematics 

#### 1.3 Closure Compiler : 
Closure complier building optimizer to create javascript modules. Closure compiler creates smaller bundles and does a better job in dead code elimination compared to Webpack and rollup bundlers

#### 1.4 Bazel Compiler: 
Bazel builds what is necessary. It is not necessary to build the entire codebase for tiny changes in the application instead we should only build the code which we changed, with advanced local and distributed caching, optimized dependency analysis and parallel execution to get fast incremental build.

#### 1.5 Tree Shakable providers : 
To make application smaller, we have moved from modules referencing services to service referencing modules.

#### BEFORE 
```
@NgModule({
...
providers: [MyService]

})
export class AppModule {}
```

#### AFTER
```
import { Injectable } from '@angular/core';

@Injectable()

export class MyService {

constructor() { }

}
```
## No references are needed in our NgModule.

#### 1.7 Animations Performance Improvements
We have removed the animation polyfills to reduce the 47KB bundle size.

#### 1.8 RxJS v6 
Angular has been updated with RxJS v6 with new extra features. ``` rxjs-compat ``` is used for backword compatibility with latest version of RXJS

#### 1.9 Dependency update 
+ Typescrit 2.7.0
+ RxJS v6.0 
+ tslib 1.9.0


-------------------------------------------------------

# NG CLI  6

#### ng update 

#### ng add 

#### PWA Support 

#### CLI Workspace: 
CLI v6 now has support for workspaces containing multiple projects, such as multiple applications or libraries. CLI projects will now use angular.jsoninstead of .angular-cli.json for build and project configuration.
Each CLI workspace has projects, each project has targets, and each target can have configurations.

#### Library Support :
We can create n number of projects within root or main project using **ng generate application other-application-name**
One of the most requested features for our CLI has been support for creating and building libraries, and we are proud to introduce:ng generate library within an existing project

This command will create a library project within your CLI workspace, and configure it for testing and for building.



#### Build improvements :
We have upgrade to Webpack 4 which comes with several performance and bundling improvements.

#### Multi application support:
Angular CLI now supports multiple individual applications within one workspace, each with separate configurations and defaults.

To create another app you can use the following command:
ng generate application my-other-app
The new application will be generated inside projects/my-other-app.
Now we can serve either application by passing the project name with the command:

ng serve my-other-app


# REFERENCES 
https://github.com/angular/angular/blob/master/CHANGELOG.md

https://github.com/angular/material2/blob/master/CHANGELOG.md

https://github.com/angular/angular-cli/releases

https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4
