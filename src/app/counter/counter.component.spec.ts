import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent',()=>{
  
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule
          ],
          declarations: [
            CounterComponent
          ],
        }).compileComponents();
      });

      it('should create the Counter', () => {
        const fixture = TestBed.createComponent(CounterComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });

      it('should have Two buttons button',()=>{
        const fixture = TestBed.createComponent(CounterComponent);
         const btnContainer = fixture.nativeElement.querySelector("#btnContainer")
         expect(btnContainer.children.length).toBe(2);
      })

      it('should have increment button',()=>{
        const fixture = TestBed.createComponent(CounterComponent);
         const btnContainer = fixture.nativeElement.querySelector("#btnContainer")
         expect(btnContainer.children[1].innerText).toBe("Decrement")
      })

      it('should have Decrement button',()=>{
        const fixture = TestBed.createComponent(CounterComponent);
         const btnContainer = fixture.nativeElement.querySelector("#btnContainer")
         expect(btnContainer.children[0].innerText).toBe("Increment")
      })

      it('should have toggle toggle container with 2 Child elements ',()=>{
        const fixture = TestBed.createComponent(CounterComponent)
        const toggleContainer = fixture.nativeElement.querySelector(".toggleContainer");
        expect(toggleContainer.children.length).toBe(2)
      })

      it('should have toggle toggle text ',()=>{
        const fixture = TestBed.createComponent(CounterComponent)
        const togleContainer = fixture.nativeElement.querySelector(".toggleContainer");
        expect(togleContainer.children[0]).toHaveClass("toggleText")
      })

      it('should have toggle btn ',()=>{
        const fixture = TestBed.createComponent(CounterComponent)
        const togleContainer = fixture.nativeElement.querySelector(".toggleContainer");
        expect(togleContainer.children[1]).toHaveClass("toggleBtn")
      })

})

