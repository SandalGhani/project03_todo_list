#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// import Choice from "inquirer/lib/objects/choice.js";
var todoList = [];
var conditions = true;
console.log(chalk_1.default.green.bold("\n \t Izhar Todo-List application\n "));
// while(conditions){
//   let addtask = await inquirer.prompt([
//     {
//       name: "task",
//       type: "input",
//       massege: chalk.blue.italic("\tEnter Your task\t"),
//     }
//   ]);
//   todoList.push(addtask.task);
//   console.log(chalk.green.whiteBright(`${addtask.task} task added into Todo List Successfully...`));
//   let addMoretask = await inquirer.prompt([
//     {
//       name: "addmore",
//       type: "confirm",
//       massege: "Do You Want To add More task...?",
//       default: "false"
//     }
//   ]);
//   conditions = addMoretask.addmore
// }
// console.log(chalk.bgGreen("Your Updated Todo-List:"), todoList);
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var option;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!conditions) return [3 /*break*/, 11];
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "choice",
                            type: "list",
                            massege: "Select an option you want to do",
                            choices: [
                                "Add task",
                                "delete task",
                                "Update task",
                                "View Todo-list",
                                "Exit",
                            ],
                        },
                    ])];
            case 1:
                option = _a.sent();
                if (!(option.choice === "Add task")) return [3 /*break*/, 3];
                return [4 /*yield*/, addtask()];
            case 2:
                _a.sent();
                return [3 /*break*/, 10];
            case 3:
                if (!(option.choice === "delete task")) return [3 /*break*/, 5];
                return [4 /*yield*/, deletetask()];
            case 4:
                _a.sent();
                return [3 /*break*/, 10];
            case 5:
                if (!(option.choice === "Update task")) return [3 /*break*/, 7];
                return [4 /*yield*/, updateTask()];
            case 6:
                _a.sent();
                return [3 /*break*/, 10];
            case 7:
                if (!(option.choice === "View Todo-list")) return [3 /*break*/, 9];
                return [4 /*yield*/, viewTask];
            case 8:
                _a.sent();
                return [3 /*break*/, 10];
            case 9:
                if (option.choice === "Exit") {
                    conditions = false;
                }
                _a.label = 10;
            case 10: return [3 /*break*/, 0];
            case 11: return [2 /*return*/];
        }
    });
}); };
//Function to add task to the list
var addtask = function () { return __awaiter(void 0, void 0, void 0, function () {
    var newTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        name: "task",
                        type: "input",
                        massege: "Enter Your New Task...,",
                    },
                ])];
            case 1:
                newTask = _a.sent();
                todoList.push(newTask.task);
                console.log("\n ".concat(newTask.task, " task added seccessfully into Todo-list...."));
                return [2 /*return*/];
        }
    });
}); };
// function ti view all Todo list tasks
var viewTask = function () {
    console.log("\n Your Todo-list:\n");
    todoList.forEach(function (task, index) {
        console.log("".concat(index + 1, " : ").concat(task));
    });
};
// Function to a task from the list
var deletetask = function () { return __awaiter(void 0, void 0, void 0, function () {
    var taskIndex, deletedtask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, viewTask()];
            case 1:
                _a.sent();
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "index",
                            type: "number",
                            massege: "Enter the index number of the task you want to delete :",
                        },
                    ])];
            case 2:
                taskIndex = _a.sent();
                deletedtask = todoList.splice(taskIndex.index - 1, 1);
                console.log("\n ".concat(deletedtask, " this task has been deleted successfully from your Todo-list"));
                return [2 /*return*/];
        }
    });
}); };
//function to update a task
var updateTask = function () { return __awaiter(void 0, void 0, void 0, function () {
    var updateTaskIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, viewTask()];
            case 1:
                _a.sent();
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "index",
                            type: "Enter the 'index number' of the task you want to update : ",
                        },
                        {
                            name: "newTask",
                            type: "input",
                            massege: "Now Enter new task name :",
                        },
                    ])];
            case 2:
                updateTaskIndex = _a.sent();
                todoList[updateTaskIndex.index - 1] = updateTaskIndex.newTask;
                console.log("\n Task at index number. ".concat(updateTaskIndex.index - 1, " updated successfuly\n     [For update list check option:\"view Todo-List\"]"));
                return [2 /*return*/];
        }
    });
}); };
main();
