<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            text-align: center;
        }
        .todo-container {
            max-width: 400px;
            margin: 0 auto;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 10px;
            margin-bottom: 5px;
            background-color: #f2f2f2;
            border-radius: 4px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            float: right;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <div class="todo-container">
        <input type="text" id="taskInput" placeholder="Enter task...">
        <button onclick="addTask()">Add Task</button>
        <ul id="taskList"></ul>
    </div>
</body>
</html>
