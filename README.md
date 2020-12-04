# CommandLineInterface

The initial code is built using a youtube tutorial : https://www.youtube.com/watch?v=v2GKt39-LPA&t=376s&ab_channel=TraversyMedia

This interface adds/updates/finds/remove and list all the customers in the collection.
Technologies used: mongoose, node, js, commander.js , inquirer.js



Commands Used:
cli-project --version

1.0.0


cli-project --help

Usage: cli-project [options] [command]

Client Management System

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  add|a           Add a customer
  find|f <name>   Find a customer
  update|u <_id>  Update a customer
  remove|r <_id>  Remove customer
  list|l          List all customer
  help [command]  display help for command


Upcoming improvements:

Adding validation to each entry using regex and display error messages using try catch error.
Add and Remove more than one customer at a time
