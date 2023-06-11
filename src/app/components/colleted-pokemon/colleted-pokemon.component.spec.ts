import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColletedPokemonComponent } from './colleted-pokemon.component';

describe('ColletedPokemonComponent', () => {
  let component: ColletedPokemonComponent;
  let fixture: ComponentFixture<ColletedPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColletedPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColletedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
