Enze Ma
1.Within a Github action that runs whenever code is pushed. Run them all after all development is completed may cause the debug process to be super hard because we need to look through all the code of the project to find which part cause the issue that happens, we don't want to dig so deep in our code because the work is maybe massive. And it's better to let the test run automatically to reduce the waste of time and in case somebody forgets to do it.
2.No
3.No, because the message system was consists of lots of functions, if we want to test the message system it's more like in feature level test instead of unit.
4.Yes, because this is a single function that decides the length of input whether valid or not and we can test it separately.