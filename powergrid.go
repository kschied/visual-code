package main

import "fmt"

func main() {

	plantCapacites := []float64{30, 30, 30, 60, 100, 300}

	activePlants := []int{0, 1, 2, 3}
	gridLoad := 75.

	fmt.Println("1) Generate Power Plant Report")
	fmt.Println("2) Generate Power Grid Report")
	fmt.Println("Please choose an option: ")

	var option string

	fmt.Scanln(&option)

	switch option {
	case "1":
		for idx, cap := range plantCapacites {
			fmt.Printf("Plant %d capacity: %.0f\n", idx, cap)
		}
	case "2":
		capacity := 0.
		for _, plantID := range activePlants {
			capacity += plantCapacites[plantID]
		}

		fmt.Printf("%-20s%.0f\n", "Capactity: ", capacity)
		fmt.Printf("%-20s%.0f\n", "Load: ", gridLoad)
		fmt.Printf("%-20s%.0f\n", "Utilization: ", gridLoad/capacity*100)

	default:
		println("Option not found ")

	}
}
