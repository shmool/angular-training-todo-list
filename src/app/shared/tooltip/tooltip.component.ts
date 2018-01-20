import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip-container">
      <div class="arrow-left"></div>
      <div #container class="tooltip-box">
        <ng-content class="tooltip-content"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('container') container;
  @ContentChild('tooltipContent') content;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    this.truncate();
  }

  truncate() {
    const text = this.content.nativeElement.innerText.split(' ');
    while (this.container.nativeElement.clientHeight < this.container.nativeElement.scrollHeight) {
      text.splice(-1, 1);
      this.renderer.setProperty(this.content.nativeElement, 'innerText', text.join(' ') + '...');
    }
  }

}
