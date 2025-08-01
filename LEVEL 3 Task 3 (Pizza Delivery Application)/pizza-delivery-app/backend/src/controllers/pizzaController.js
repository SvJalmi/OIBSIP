exports.getPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({ message: "Error fetching pizzas", error });
    }
};

exports.createPizza = async (req, res) => {
    const { name, base, sauce, cheese, toppings } = req.body;

    try {
        const newPizza = new Pizza({ name, base, sauce, cheese, toppings });
        await newPizza.save();
        res.status(201).json(newPizza);
    } catch (error) {
        res.status(500).json({ message: "Error creating pizza", error });
    }
};