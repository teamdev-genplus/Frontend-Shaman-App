import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private generativeAi: GoogleGenerativeAI;

  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
    this.generativeAi = new GoogleGenerativeAI(
      'AIzaSyBxdRH6EvyjKzRb2RR6jsE-wcbOn5zCnS0'
    );
  }

  async generateText(prompt: string) {
    const model = this.generativeAi.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    this.messageHistory.next({
      from: 'bot',
      message: text,
    });
  }

  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();
  }
}
