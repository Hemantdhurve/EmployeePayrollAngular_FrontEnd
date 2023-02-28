import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";


export let fade=trigger('fade',[ 
    state('void',style({opacity:0})),
    transition(':enter,:leave',[
        animate(2000)
    ])
]);

export let slider=trigger('slider',[
    transition('*=>*',[
        query('.twoIcons .point',stagger('500ms',[
            animate('800ms 1.2s ease-out',style({
                opacity:1,
                transform:'translateX(0)'
            }))
        ]),{optional:true}),
    ])
])