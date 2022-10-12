export const getExamQuestions = (id) => {
  const questionBank = allQuestionBank.filter((questionBank) => {
    if(id === questionBank.id) {
      return true;
    }
    return false;
  });

  return questionBank[0].collection;
}

const questionBank1 = [{
    'id': 1,
    'question': "What are the major advantages of React.JS? - - question 1",
    'options': [{
      'id': 'a',
      "desc" : "SEO-friendliness, Virtual DOM, reusable components, and one-way data flow"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "Easy to learn, Usage of TypeScript, Virtual DOM, and two-way data binding"
    },{
      'id': 'd',
      "desc" : "Easy to learn, Usage of TypeScript, Virtual DOM, and two-way data binding"
    }]
  },{
    'id': 2,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 3,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 4,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 5,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 6,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 7,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 8,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 9,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  },{
    'id': 10,
    'question': "What are the main features of React.JS you would like to list?",
    'options': [{
      'id': 'a',
      "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
    },{
      'id': 'b',
      "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
    },{
      'id': 'c',
      "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
    },{
      'id': 'd',
      "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
    }]
  }];


const questionBank2 = [{
  'id': 1,
  'question': "What are the major advantages of React.JS? - question 2",
  'options': [{
    'id': 'a',
    "desc" : "SEO-friendliness, Virtual DOM, reusable components, and one-way data flow"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "Easy to learn, Usage of TypeScript, Virtual DOM, and two-way data binding"
  },{
    'id': 'd',
    "desc" : "Easy to learn, Usage of TypeScript, Virtual DOM, and two-way data binding"
  }]
},{
  'id': 2,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 3,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 4,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 5,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 6,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 7,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 8,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 9,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 10,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
}];


const questionBank3 = [{
  'id': 1,
  'question': "What are the major advantages of React.JS - question 3?",
  'options': [{
    'id': 'a',
    "desc" : "SEO-friendliness, Virtual DOM, reusable components, and one-way data flow"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "Easy to learn, Usage of TypeScript, Virtual DOM, and two-way data binding"
  },{
    'id': 'd',
    "desc" : "Easy to learn, Usage of TypeScript, Virtual DOM, and two-way data binding"
  }]
},{
  'id': 2,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 3,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 4,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 5,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 6,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 7,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 8,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 9,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
},{
  'id': 10,
  'question': "What are the main features of React.JS you would like to list?",
  'options': [{
    'id': 'a',
    "desc" : "JSX, Event Handling, Virtual DOM, Computed Properties, Template"
  },{
    'id': 'b',
    "desc" : "Being maintained by Google, Two-way data binding, Usage of TypeScript"
  },{
    'id': 'c',
    "desc" : "MVC Architecture, Less Code Framework, Dependency Injection, Directives"
  },{
    'id': 'd',
    "desc" : "JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native"
  }]
}];

const allQuestionBank = [{
  "id" : "_32445",
  "collection": questionBank1
},{
  "id" : "_32446",
  "collection": questionBank2
},{
  "id" : "_32447",
  "collection": questionBank3
}]

