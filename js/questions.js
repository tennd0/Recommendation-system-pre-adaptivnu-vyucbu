// creating an array and passing the number, questions, options, and answers
const path = "./images/";

let questions = [
    {
    numb: 1,
    question: "Čo znamená táto dopravná značka?",
    image: path + "231_Zákaz_vjazdu_pre_všetky_vozidlá.svg.png",
    answer: "Zákaz vjazdu vozidiel (v oboch smeroch)",
    options: [
      "Zákaz zastavenia",
      "Prednosť majú protiidúce vozidlá",
      "Zákaz vjazdu vozidiel (v oboch smeroch)",
      "Zákaz vjazdu vozidiel"
    ]
  },
    {
    numb: 2,
    question: "Čo znamená táto dopravná značka?",
    image: path + "232_Zákaz_vjazdu_pre_všetky_motorové_vozidlá.svg.png",
    answer: "Zákaz motorových vozidiel",
    options: [
      "Vstup len pre motorové vozidlá",
      "Zákaz motocyklov a automobilov",
      "Vstup len pre automobily a motocykle",
      "Zákaz motorových vozidiel"
    ]
  },
    {
    numb: 3,
    question: "Čo znamená táto dopravná značka?",
    image: path + "203_Prednosť_protiidúcich_vozidiel.svg.png",
    answer: "Prednosť majú protiidúce vozidlá",
    options: [
      "Prednosť majú protiidúce vozidlá",
      "Obojsmerná premávka",
      "Prednosť pred protiidúcimi vozidlami",
      "Držte sa vpredu alebo vzadu"
    ]
  },
    {
    numb: 4,
    question: "Čo znamená táto dopravná značka?",
    image: path + "201_Daj_prednosť_v_jazde!.svg.png",
    answer: "Daj prednosť v jazde",
    options: [
      "Daj výstražné znamenie",
      "Nebezpečenstvo vpred",
      "Križovatka s vedľajšími cestami",
      "Daj prednosť v jazde"
    ]
  },
    {
    numb: 5,
    question: "Čo znamená táto dopravná značka?",
    image: path + "271_Zákaz_státia.svg.png",
    answer: "Zákaz státia",
    options: [
      "Zákaz státia",
      "Zákaz vstupu",
      "Zákaz zastavenia",
      "Zákaz parkovania"
    ]
  },





  {
    numb: 6,
    question: "Čo znamená táto dopravná značka?",
    image: path + "202_Stoj,_daj_prednosť_v_jazde!.svg.png",
    answer: "Stoj, daj prednosť v jazde",
    options: [
      "Zákaz zastavenia",
      "Daj prednosť v jazde",
      "Stoj, daj prednosť v jazde",
      "Zákaz vjazdu vozidiel"
    ]
  },
    {
    numb: 7,
    question: "Čo znamená táto dopravná značka?",
    image: path + "230_Zákaz_vjazdu.svg.png",
    answer: "Zákaz vjazdu",
    options: [
      "Ideš opačným smerom",
      "Prednosť majú protiidúce vozidlá",
      "Zákaz vjazdu",
      "Zákaz motorových vozidiel"
    ]
  },
    {
    numb: 8,
    question: "Čo znamená táto dopravná značka?",
    image: path + "101_Nebezpečenstvo.svg.png",
    answer: "Nebezpečenstvo",
    options: [
      "Nerovnosť vozovky",
      "Nebezpečenstvo šmyku",
      "Daj prednosť v jazde",
      "Nebezpečenstvo"
    ]
  },

  {
    numb: 9,
    question: "Čo znamená táto dopravná značka?",
    image: path + "110-10_Zákruta_(vľavo).svg.png",
    answer: "Zákruta (vľavo)",
    options: [
      "Prikázaný smer odbočenia (tu vľavo)",
      "Zákruta (vľavo)",
      "Zákaz odbočenia (vľavo)",
      "Jednosmerná cesta (tu vľavo)"
    ]
  },
  {
    numb: 10,
    question: "Čo znamená táto dopravná značka?",
    image: path + "110-20_Zákruta_(vpravo).svg.png",
    answer: "Zákruta (vpravo)",
    options: [
      "Zákruta (vpravo)",
      "Prikázaný smer odbočenia (tu vpravo)",
      "Dvojitá zákruta (prvá vpravo)",
      "Zákaz odbočenia (vpravo)"
    ]
  },
  {
    numb: 11,
    question: "Čo znamená táto dopravná značka?",
    image: path + "111-10_Dvojitá_zákruta_(prvá_vľavo).svg.png",
    answer: "Dvojitá zákruta (prvá vľavo)",
    options: [
      "Zákruta (vpravo)",
      "Zúžená vozovka (zľava)",
      "Nebezpečenstvo",
      "Dvojitá zákruta (prvá vľavo)"
    ]
  },
  {
    numb: 12,
    question: "Čo znamená táto dopravná značka?",
    image: path + "111-20_Dvojitá_zákruta_(prvá_vpravo).svg.png",
    answer: "Dvojitá zákruta (prvá vpravo)",
    options: [
      "Zákruta (vpravo)",
      "Prikázaný smer obchádzania (vpravo)",
      "Dvojitá zákruta (prvá vpravo)",
      "Nebezpečenstvo šmyku"
    ]
  },
   {
    numb: 13,
    question: "Čo znamená táto dopravná značka?",
    image: path + "112-4_Klesanie_(4%).svg.png",
    answer: "Klesanie (4%)",
    options: [
      "Stúpanie (4%)",
      "Nerovnosť vozovky",
      "Klesanie (4%)",
      "Nebezpečenstvo šmyku"
    ]
  },
  {
    numb: 14,
    question: "Čo znamená táto dopravná značka?",
    image: path + "112-11_Klesanie_(11%).svg.png",
    answer: "Klesanie (11%)",
    options: [
      "Klesanie (11%)",
      "Stúpanie (11%)",
      "Sneh alebo poľadovica",
      "Zákaz vjazdu"
    ]
  },
  {
    numb: 15,
    question: "Čo znamená táto dopravná značka?",
    image: path + "113-7_Stúpanie_(7%).svg.png",
    answer: "Stúpanie (7%)",
    options: [
      "Kolóny",
      "Padnuté kamene (z pravej strany)",
      "Klesanie (7%)",
      "Stúpanie (7%)"
    ]
  },
  {
    numb: 16,
    question: "Čo znamená táto dopravná značka?",
    image: path + "113-20_Stúpanie_(20%).svg.png",
    answer: "Stúpanie (20%)",
    options: [
      "Klesanie (20%)",
      "Stúpanie (20%)",
      "Nebezpečenstvo",
      "Priecestie"
    ]
  },
  {
    numb: 17,
    question: "Čo znamená táto dopravná značka?",
    image: path + "114-10_Zúžená_vozovka_(sprava).svg.png",
    answer: "Zúžená vozovka (sprava)",
    options: [
      "Prikázaný smer jazdy (vpravo)",
      "Zúžená vozovka (zľava)",
      "Zúžená vozovka (sprava)",
      "Zúžená vozovka (z oboch strán)"
    ]
  },
   {
    numb: 18,
    question: "Čo znamená táto dopravná značka?",
    image: path + "114-20_Zúžená_vozovka_(zľava).svg.png",
    answer: "Zúžená vozovka (zľava)",
    options: [
      "Zúžená vozovka (zľava)",
      "Prednosť protiidúcich vozidiel",
      "Zúžená vozovka (sprava)",
      "Prikázaný smer jazdy (vľavo alebo vpravo)"
    ]
  },
  {
    numb: 19,
    question: "Čo znamená táto dopravná značka?",
    image: path + "114-30_Zúžená_vozovka_(z_oboch_strán).svg.png",
    answer: "Zúžená vozovka (z oboch strán)",
    options: [
      "Zúžená vozovka (zľava)",
      "Nerovnosť vozovky",
      "Zúžená vozovka (z oboch strán)",
      "Prikázaný smer odbočenia (tu vľavo)"
    ]
  },
   {
    numb: 20,
    question: "Čo znamená táto dopravná značka?",
    image: path + "115_Nerovnosť_vozovky.svg.png",
    answer: "Nerovnosť vozovky",
    options: [
      "Nerovnosť vozovky",
      "Nebezpečná krajnica",
      "Štrk na vozovke",
      "Bočný vietor"
    ]
  },
  {
    numb: 21,
    question: "Čo znamená táto dopravná značka?",
    image: path + "116_Nebezpečná_krajnica.svg.png",
    answer: "Nebezpečná krajnica",
    options: [
      "Hlavná cesta",
      "Nebezpečná krajnica",
      "Nebezpečná krajnica",
      "Štrk na vozovke"
    ]
  },
  {
    numb: 22,
    question: "Čo znamená táto dopravná značka?",
    image: path + "120_Nebezpečenstvo_šmyku.svg.png",
    answer: "Nebezpečenstvo šmyku",
    options: [
      "Nebezpečenstvo šmyku",
      "Sneh alebo poľadovica",
      "Zver (umiestnenie vpravo)",
      "Štrk na vozovke"
    ]
  },
  {
    numb: 23,
    question: "Čo znamená táto dopravná značka?",
    image: path + "121_Sneh_alebo_poľadovica.svg.png",
    answer: "Sneh alebo poľadovica",
    options: [
      "Priecestie",
      "Svetelné signály",
      "Sneh alebo poľadovica",
      "Štrk na vozovke"
    ]
  },
  {
    numb: 24,
    question: "Čo znamená táto dopravná značka?",
    image: path + "122_Štrk_na_vozovke.svg.png",
    answer: "Štrk na vozovke",
    options: [
      "Padnuté kamene (z pravej strany)",
      "Štrk na vozovke",
      "Križovatka",
      "Kolóny"
    ]
  },
  {
    numb: 25,
    question: "Čo znamená táto dopravná značka?",
    image: path + "125-10_Padnuté_kamene_(z_pravej_strany).svg.png",
    answer: "Padnuté kamene (z pravej strany)",
    options: [
      "Padnuté kamene (z pravej strany)",
      "Padnuté kamene (z ľavej strany)",
      "Zúžená vozovka (z oboch strán)",
      "Kolóny"
    ]
  },
  {
    numb: 26,
    question: "Čo znamená táto dopravná značka?",
    image: path + "125-20_Padnuté_kamene_(z_ľavej_strany).svg.png",
    answer: "Padnuté kamene (z ľavej strany)",
    options: [
      "Padnuté kamene (z pravej strany)",
      "Štrk na vozovke",
      "Práca",
      "Padnuté kamene (z ľavej strany)"
    ]
  },
  {
    numb: 27,
    question: "Čo znamená táto dopravná značka?",
    image: path + "126_Bočný_vietor.svg.png",
    answer: "Bočný vietor",
    options: [
      "Bočný vietor",
      "Stúpanie (20%)",
      "Práca",
      "Hospodárske zvieratá (umiestnenie vľavo)"
    ]
  },
  {
    numb: 28,
    question: "Čo znamená táto dopravná značka?",
    image: path + "130_Kolóny.svg.png",
    answer: "Kolóny",
    options: [
      "Zúžená vozovka (z oboch strán)",
      "Kolóny",
      "Priecestie",
      "Daj prednosť v jazde!"
    ]
  },
  {
    numb: 29,
    question: "Čo znamená táto dopravná značka?",
    image: path + "131_Práca.svg.png",
    answer: "Práca",
    options: [
      "Práca",
      "Chodci (umiestnenie vľavo)",
      "Križovatka s prednosťou v jazde",
      "Padnuté kamene (z pravej strany)"
    ]
  },
  {
    numb: 30,
    question: "Čo znamená táto dopravná značka?",
    image: path + "132_Obojsmerná_premávka.svg.png",
    answer: "Obojsmerná premávka",
    options: [
      "Dvojitá zákruta (prvá vpravo)",
      "Obojsmerná premávka",
      "Prednosť pred protiidúcimi vozidlami",
      "Jednosmerná cesta (priamo)"
    ]
  },
  {
    numb: 31,
    question: "Čo znamená táto dopravná značka?",
    image: path + "135_Svetelné_signály.svg.png",
    answer: "Svetelné signály",
    options: [
      "Kolóny",
      "Obojsmerná premávka",
      "Hlavná cesta",
      "Svetelné signály"
    ]
  },
  {
    numb: 32,
    question: "Čo znamená táto dopravná značka?",
    image: path + "136_Križovatka.svg.png",
    answer: "Križovatka",
    options: [
      "Kolóny",
      "Križovatka",
      "Križovatka s prednosťou v jazde",
      "Prednosť pred protiidúcimi vozidlami"
    ]
  },
  {
    numb: 33,
    question: "Čo znamená táto dopravná značka?",
    image: path + "140-10_Chodci_(umiestnenie_vpravo).svg.png",
    answer: "Chodci (umiestnenie vpravo)",
    options: [
      "Chodci (umiestnenie vľavo)",
      "Chodci (umiestnenie vpravo)",
      "Práca",
      "Deti (umiestnenie vpravo)"
    ]
  },
  {
    numb: 34,
    question: "Čo znamená táto dopravná značka?",
    image: path + "140-20_Chodci_(umiestnenie_vľavo).svg.png",
    answer: "Chodci (umiestnenie vľavo)",
    options: [
      "Chodci (umiestnenie vľavo)",
      "Chodci (umiestnenie vpravo)",
      "Cyklisti (umiestnenie vľavo)",
      "Deti (umiestnenie vpravo)"
    ]
  },
  {
    numb: 35,
    question: "Čo znamená táto dopravná značka?",
    image: path + "141-10_Deti_(umiestnenie_vpravo).svg.png",
    answer: "Deti (umiestnenie vpravo)",
    options: [
      "Obojsmerná premávka",
      "Chodci (umiestnenie vpravo)",
      "Kolóny",
      "Deti (umiestnenie vpravo)"
    ]
  },
  {
    numb: 36,
    question: "Čo znamená táto dopravná značka?",
    image: path + "141-20_Deti_(umiestnenie_vľavo).svg.png",
    answer: "Deti (umiestnenie vľavo)",
    options: [
      "Deti (umiestnenie vľavo)",
      "Chodci (umiestnenie vpravo)",
      "Kolóny",
      "Chodci (umiestnenie vľavo)"
    ]
  },
  {
    numb: 37,
    question: "Čo znamená táto dopravná značka?",
    image: path + "142-10_Priechod_pre_chodcov_(výstražná_značka;_umiestnenie_vpravo).svg.png",
    answer: "Priechod pre chodcov (výstražná značka; umiestnenie vpravo)",
    options: [
      "Priechod pre cyklistov (umiestnenie vpravo)",
      "Chodci (umiestnenie vpravo)",
      "Priechod pre chodcov (výstražná značka; umiestnenie vľavo)",
      "Priechod pre chodcov (výstražná značka; umiestnenie vpravo)"
    ]
  },
  {
    numb: 38,
    question: "Čo znamená táto dopravná značka?",
    image: path + "142-20_Priechod_pre_chodcov_(výstražná_značka;_umiestnenie_vľavo).svg.png",
    answer: "Priechod pre chodcov (výstražná značka; umiestnenie vľavo)",
    options: [
      "Priechod pre chodcov (výstražná značka; umiestnenie vľavo)",
      "Chodci (umiestnenie vpravo)",
      "Bočný vietor",
      "Priechod pre chodcov (výstražná značka; umiestnenie vpravo)"
    ]
  },
   {
    numb: 39,
    question: "Čo znamená táto dopravná značka?",
    image: path + "143-10_Cyklisti_(umiestnenie_vpravo).svg.png",
    answer: "Cyklisti (umiestnenie vpravo)",
    options: [
      "Cyklisti (umiestnenie vpravo)",
      "Chodci (umiestnenie vpravo)",
      "Cyklisti (umiestnenie vľavo)",
      "Deti (umiestnenie vpravo)"
    ]
  },
  {
    numb: 40,
    question: "Čo znamená táto dopravná značka?",
    image: path + "143-20_Cyklisti_(umiestnenie_vľavo).svg.png",
    answer: "Cyklisti (umiestnenie vľavo)",
    options: [
      "Cyklisti (umiestnenie vľavo)",
      "Chodci (umiestnenie vpravo)",
      "Cyklisti (umiestnenie vpravo)",
      "Hospodárske zvieratá (umiestnenie vľavo)"
    ]
  },
  {
    numb: 41,
    question: "Čo znamená táto dopravná značka?",
    image: path + "145-10_Zver_(umiestnenie_vpravo).svg.png",
    answer: "Zver (umiestnenie vpravo)",
    options: [
      "Cyklisti (umiestnenie vpravo)",
      "Priecestie",
      "Zver (umiestnenie vpravo)",
      "Hospodárske zvieratá (umiestnenie vľavo)"
    ]
  },
  {
    numb: 42,
    question: "Čo znamená táto dopravná značka?",
    image: path + "145-11_Zver_(drobné_živočíchy,_umiestnenie_vpravo).svg.png",
    answer: "Zver (drobné živočíchy, umiestnenie vpravo)",
    options: [
      "Nebezpečenstvo šmyku",
      "Priecestie",
      "Zver (umiestnenie vpravo)",
      "Zver (drobné živočíchy, umiestnenie vpravo)"
    ]
  },
  {
    numb: 43,
    question: "Čo znamená táto dopravná značka?",
    image: path + "145-20_Zver_(umiestnenie_vľavo).svg.png",
    answer: "Zver (umiestnenie vľavo)",
    options: [
      "Nebezpečenstvo šmyku",
      "Zver (umiestnenie vľavo)",
      "Zver (umiestnenie vpravo)",
      "Cyklisti (umiestnenie vľavo)"
    ]
  },
  {
    numb: 44,
    question: "Čo znamená táto dopravná značka?",
    image: path + "145-21_Zver_(drobné_živočíchy,_umiestnenie_vľavo).svg.png",
    answer: "Zver (drobné živočíchy, umiestnenie vľavo)",
    options: [
      "Nebezpečenstvo šmyku",
      "Zver (drobné živočíchy, umiestnenie vľavo)",
      "Zver (umiestnenie vpravo)",
      "Kolóny"
    ]
  },
  {
    numb: 45,
    question: "Čo znamená táto dopravná značka?",
    image: path + "146-10_Hospodárske_zvieratá_(umiestnenie_vpravo).svg.png",
    answer: "Hospodárske zvieratá (umiestnenie vpravo)",
    options: [
      "Nebezpečenstvo šmyku",
      "Zver (drobné živočíchy, umiestnenie vľavo)",
      "Hospodárske zvieratá (umiestnenie vpravo)",
      "Priechod pre chodcov (výstražná značka; umiestnenie vpravo)"
    ]
  },
  {
    numb: 46,
    question: "Čo znamená táto dopravná značka?",
    image: path + "146-20_Hospodárske_zvieratá_(umiestnenie_vľavo).svg.png",
    answer: "Hospodárske zvieratá (umiestnenie vľavo)",
    options: [
      "Nebezpečenstvo šmyku",
      "Hospodárske zvieratá (umiestnenie vľavo)",
      "Hospodárske zvieratá (umiestnenie vpravo)",
      "Práca"
    ]
  },
  {
    numb: 47,
    question: "Čo znamená táto dopravná značka?",
    image: path + "151_Priecestie.svg.png",
    answer: "Priecestie",
    options: [
      "Priecestie",
      "Nerovnosť vozovky",
      "Kolóny",
      "Práca"
    ]
  },
  {
    numb: 48,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-10_Návesť_pred_priecestím_(3-pruhová,_umiestnenie_vpravo).svg.png",
    answer: "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)",
    options: [
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)",
      "Návesť pred priecestím (3-pruhová, umiestnenie vľavo)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vľavo)",
      "Práca"
    ]
  },
  {
    numb: 49,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-11_Návesť_pred_priecestím_(2-pruhová,_umiestnenie_vpravo).svg.png",
    answer: "Návesť pred priecestím (2-pruhová, umiestnenie vpravo)",
    options: [
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)",
      "Návesť pred priecestím (1-pruhová, umiestnenie vpravo)",
      "Návesť pred priecestím (2-pruhová, umiestnenie vľavo)",
      "Návesť pred priecestím (2-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 50,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-12_Návesť_pred_priecestím_(1-pruhová,_umiestnenie_vpravo).svg.png",
    answer: "Návesť pred priecestím (1-pruhová, umiestnenie vpravo)",
    options: [
      "Návesť pred priecestím (3-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (1-pruhová, umiestnenie vpravo)",
      "Návesť pred priecestím (2-pruhová, umiestnenie vľavo)",
      "Návesť pred priecestím (2-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 51,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-15_Návesť_pred_priecestím_(3-pruhová_so_vzdialenosťou,_umiestnenie_vpravo).svg.png",
    answer: "Návesť pred priecestím (3-pruhová so vzdialenosťou, umiestnenie vpravo)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Návesť pred priecestím (1-pruhová, umiestnenie vpravo)",
      "Návesť pred priecestím (3-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (2-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 52,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-16_Návesť_pred_priecestím_(2-pruhová_so_vzdialenosťou,_umiestnenie_vpravo).svg.png",
    answer: "Návesť pred priecestím (2-pruhová so vzdialenosťou, umiestnenie vpravo)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Návesť pred priecestím (1-pruhová, umiestnenie vpravo)",
      "Návesť pred priecestím (3-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (2-pruhová so vzdialenosťou, umiestnenie vpravo)"
    ]
  },
  {
    numb: 53,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-17_Návesť_pred_priecestím_(1-pruhová_so_vzdialenosťou,_umiestnenie_vpravo).svg.png",
    answer: "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (3-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 54,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-20_Návesť_pred_priecestím_(3-pruhová,_umiestnenie_vľavo).svg.png",
    answer: "Návesť pred priecestím (3-pruhová, umiestnenie vľavo)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (3-pruhová, umiestnenie vľavo)",
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 55,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-21_Návesť_pred_priecestím_(2-pruhová,_umiestnenie_vľavo).svg.png",
    answer: "Návesť pred priecestím (2-pruhová, umiestnenie vľavo)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (2-pruhová, umiestnenie vľavo)",
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 56,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-22_Návesť_pred_priecestím_(1-pruhová,_umiestnenie_vľavo).svg.png",
    answer: "Návesť pred priecestím (1-pruhová, umiestnenie vľavo)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Návesť pred priecestím (1-pruhová, umiestnenie vľavo)",
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 57,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-25_Návesť_pred_priecestím_(3-pruhová_so_vzdialenosťou,_umiestnenie_vľavo).svg.png",
    answer: "Návesť pred priecestím (3-pruhová so vzdialenosťou, umiestnenie vľavo)",
    options: [
      "Návesť pred priecestím (3-pruhová so vzdialenosťou, umiestnenie vľavo)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Priecestie",
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 58,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-26_Návesť_pred_priecestím_(2-pruhová_so_vzdialenosťou,_umiestnenie_vľavo).svg.png",
    answer: "Návesť pred priecestím (2-pruhová so vzdialenosťou, umiestnenie vľavo)",
    options: [
      "Návesť pred priecestím (2-pruhová so vzdialenosťou, umiestnenie vľavo)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Priecestie",
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 59,
    question: "Čo znamená táto dopravná značka?",
    image: path + "152-27_Návesť_pred_priecestím_(1-pruhová_so_vzdialenosťou,_umiestnenie_vľavo).svg.png",
    answer: "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vľavo)",
    options: [
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vľavo)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Priecestie",
      "Návesť pred priecestím (3-pruhová, umiestnenie vpravo)"
    ]
  },
  {
    numb: 60,
    question: "Čo znamená táto dopravná značka?",
    image: path + "153-50_Výstražný_kríž_(vedľa_vozovky).svg.png",
    answer: "Výstražný kríž (vedľa vozovky)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Návesť pred priecestím (1-pruhová so vzdialenosťou, umiestnenie vpravo)",
      "Priecestie",
      "Výstražný kríž (vedľa vozovky)"
    ]
  },
  {
    numb: 61,
    question: "Čo znamená táto dopravná značka?",
    image: path + "153-51_Výstražný_kríž_(vedľa_vozovky,_elektrifikovaná_trať).svg.png",
    answer: "Výstražný kríž (vedľa vozovky, elektrifikovaná trať)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Výstražný kríž (vedľa vozovky, elektrifikovaná trať)",
      "Priecestie",
      "Výstražný kríž (vedľa vozovky)"
    ]
  },
  {
    numb: 62,
    question: "Čo znamená táto dopravná značka?",
    image: path + "153-52_Výstražný_kríž_(nad_vozovkou).svg.png",
    answer: "Výstražný kríž (nad vozovkou)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Výstražný kríž (vedľa vozovky, elektrifikovaná trať)",
      "Priecestie",
      "Daj prednosť v jazde!"
    ]
  },
  {
    numb: 63,
    question: "Čo znamená táto dopravná značka?",
    image: path + "153-53_Výstražný_kríž_(nad_vozovkou,_elektrifikovaná_trať).svg.png",
    answer: "Výstražný kríž (nad vozovkou, elektrifikovaná trať)",
    options: [
      "Výstražný kríž (nad vozovkou)",
      "Výstražný kríž (nad vozovkou, elektrifikovaná trať)",
      "Priecestie",
      "Daj prednosť v jazde!"
    ]
  }



];