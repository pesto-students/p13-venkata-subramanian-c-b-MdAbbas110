## #####What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling ?

---

**Scaling** basically means increasing and decreasing the capacity of a system based on the requirement of the traffic users on the website

![scaling](./assests/Screenshot%202023-08-07%20121836.png)

_There are two type of Scaling Vertical and Horizontal scaling_

- **Vertical Scaling:** In this we use to increase the capacity of a single machine by adding external components like RAM, CPU, etc to scale up the configuration of the system so here we add the components in a single machine to increase its performance

_Note:_ All the machine has some point of capacity that we can't extend the system more then that here is the limitation of vertical scaling that it is limited at a point.

- **Horizontal Scaling:** Here we add new devices to the existing machine to make it scalable, Here we can play around the requirement and accordingly add new machines when we know that the traffic is going to increase and the set of this machines are called _Node_ and set of nodes are called _Cluster_ .

_Note:_ In this type of scaling we need one more device that is called as Load Balance that will distribute the traffic accordingly to the all the added nodes so that all machines can work equally.

**Which one is best then ?**
It depends on the requirement that if you can handle the traffic in a single device increasing its configuration go for vertical no headache of load balancer
But if the traffic is more and you can't handle it in one machine go for horizontal
