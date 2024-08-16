let circles = [];
let force_factor = 0.2; 
let minR = 10; 
let maxR = 20; 
let numParticles = 90; 
let palette = ["#ED8496", "#F4B2C6", "#F1CEDA", "#FAEEEE"/*"#F1E5D5", "#EEC2A6"*/];
let _w, _h; 
let abigailVariations = [
  "Abby",
  "Abi", 
  "Abbie", 
  "Abbi",
  "Ab",
  "Abie", 
  "Cutie", 
  "Gorgeous", 
  "Smart", 
  "Beautiful",  
  "Abigail", 
  "💖", "💗", "💝", "💘", "😍",
];

function startSketch() {
  _w = windowWidth; 
  _h = windowHeight; 
  createCanvas(_w, _h);  
  numParticles = int(map(_w, 0, 1920, 10, 90)); 

  // Create some circles with random positions, velocities, and radii
  for (let i = 0; i < numParticles; i++) {
    circles.push(new Circle(random(width), random(height), random(minR, maxR)));
  }
}

function draw() {
  background("#efefef");

  // Update and display all circles
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();

    // Check for collision with other circles
    for (let j = i + 1; j < circles.length; j++) {
      if (circles[i].isColliding(circles[j])) {
        circles[i].respondToCollision(circles[j]);
      }
    }
  } 
  
  textSize(28);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Abigail💗', 100, 50);
}

function mouseClicked() { 
  var newNumParticles =  int(map(_w, 0, 1920, 4, 30)); 
  for (let i = 0; i < newNumParticles; i++) {
    circles.push(new Circle(random(width), random(height), random(minR, maxR)));
  }
}

function windowResized() {
  _w = windowWidth; 
  _h = windowHeight; 
  resizeCanvas(_w, _h); // Adjust the canvas size when the window is resized
}
  
// Circle class
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = random(-(force_factor), force_factor);
    this.vy = random(-(force_factor), force_factor); 
    this.color = random(palette); 
    this.text = random(abigailVariations); 
  }

  // Move the circle
  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off walls
    if (this.x < this.r || this.x > width - this.r) {
      this.vx *= -(force_factor);
    }
    if (this.y < this.r || this.y > height - this.r) {
      this.vy *= -(force_factor);
    }
  }

  // Display the circle
  display() {
    fill(this.color);
    noStroke(); 
    ellipse(this.x, this.y, this.r * 2); 
    
//     if (random() < 0.05) { 
//       textSize(16);
//       text('Abigail', this.x, this.y);
//     }
    
    // Always display the text at the circle's location
    fill(0); // Set text color (black)
    textSize(12);
    textAlign(CENTER, CENTER); // Align text to center
    text(this.text, this.x, this.y); // Display 'Abigail' at the circle's center
  }

  // Check if this circle is colliding with another circle
  isColliding(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d <= this.r + other.r;
  }

  // Respond to collision by reversing velocity (simple response)
  respondToCollision(other) {
    // Simple response: Reverse velocities
    this.vx *= -1;
    this.vy *= -1;
    other.vx *= -1;
    other.vy *= -1;

    // Optional: Separate circles slightly to avoid overlapping
    let overlap = this.r + other.r - dist(this.x, this.y, other.x, other.y);
    let angle = atan2(this.y - other.y, this.x - other.x);
    this.x += cos(angle) * overlap / 2;
    this.y += sin(angle) * overlap / 2;
    other.x -= cos(angle) * overlap / 2;
    other.y -= sin(angle) * overlap / 2;
  }
}
