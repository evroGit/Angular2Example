import {Directive, Renderer2, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appLoadingMask]'
})
export class LoadingMaskDirective implements OnChanges {
  @Input() loadingMask: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnChanges(changes) {
    if (changes.loadingMask.previousValue !== changes.loadingMask.currentValue) {
      if (changes.loadingMask.currentValue === true) {
        this.setLoadingMask();
      } else {
        this.removeLoadingMask();
      }
    }
  }

  private setLoadingMask() {
    const mask = this.renderer.createElement("div");
    this.renderer.setStyle(this.el.nativeElement, "position", "relative");
    this.renderer.addClass(mask, "loadingMask");
    this.renderer.insertBefore(this.el.nativeElement, mask, this.el.nativeElement.firstChild);
  }

  private removeLoadingMask() {
    this.renderer.removeChild(this.el.nativeElement, this.el.nativeElement.firstChild);
  }
}
