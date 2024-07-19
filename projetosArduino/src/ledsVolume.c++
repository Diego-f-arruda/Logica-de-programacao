int vetLeds[] = {4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
int ledInt[] = {100, 200, 300, 400, 500, 600, 700, 800, 900, 1000};

void setup(){
	Serial.begin(9600);
  for(int i = 0;i < 10; i++){
  pinMode(vetLeds[i], OUTPUT);
  }  
}

void loop(){
  for(int i = 0;i < 10; i++){
  if(ledInt[i] < valorPoten()){
  	digitalWrite(vetLeds[i], HIGH);
	}else{
    	pinMode(vetLeds[i], LOW);
    }
  }
}

int valorPoten(){
	int valor = analogRead(A5);
  	Serial.println(valor);
  	return valor;
}