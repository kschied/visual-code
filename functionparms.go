package main

func main() {

	sayHello("Hello", "Go", "from", "Pluralsight")

}

func sayHello(messages ...string) {
	for _, messages := range messages {
		println(messages)
	}

}
