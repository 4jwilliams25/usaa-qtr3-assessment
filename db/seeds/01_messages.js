exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
          {
            name: "Whitley Crawford",
            message: "Ut eiusmod nulla quis quis occaecat in sint. Aliquip ullamco aliqua cillum elit adipisicing voluptate culpa minim sint ipsum. Proident enim qui nostrud qui velit enim quis exercitation incididunt aliquip ipsum incididunt. Esse ullamco consectetur Lorem veniam Lorem in incididunt cupidatat. Ea ea occaecat aliquip nisi eiusmod consequat ut ullamco. Exercitation mollit deserunt eu exercitation in Lorem aliqua consequat. Ad incididunt anim esse eiusmod.\r\n"
          },
          {
            name: "Lowery Ruiz",
            message: "Sint esse qui quis duis pariatur in est deserunt non fugiat non sit aliquip ut. Et enim tempor consequat esse velit sint in fugiat ex enim Lorem ullamco proident dolore. Minim do qui excepteur sint sunt excepteur tempor commodo. Et nostrud consequat eiusmod pariatur non et do officia deserunt. Nulla Lorem excepteur ullamco irure cillum deserunt pariatur voluptate elit incididunt exercitation est. Velit duis dolore aute dolore consequat excepteur et veniam. Consectetur ullamco sit consectetur ipsum dolore occaecat aute pariatur ad.\r\n"
          },
          {
            name: "Mclaughlin Salinas",
            "message": "Esse velit eu tempor ex cupidatat laboris. Officia aliqua eiusmod quis sit dolor nulla aliquip enim cillum. Aliquip nisi deserunt minim quis anim ullamco sit incididunt sit eiusmod sunt excepteur. Culpa sint exercitation Lorem id dolor irure tempor.\r\n"
          },
          {
            name: "Mary Sweet",
            "message": "Deserunt est ea ipsum aute nisi tempor proident officia. Amet dolore est aliquip do proident aliqua quis duis est Lorem sunt reprehenderit irure. Sit non ea dolore ut aliquip sit aute. Velit dolor velit do fugiat esse. Et laboris dolore amet anim est aliquip non reprehenderit incididunt qui ut officia minim nisi.\r\n"
          },
          {
            name: "Erma Barker",
            message: "Id nulla ea proident amet non nulla ut laborum qui ullamco adipisicing sint. Ex sint minim veniam cupidatat nisi. Elit nisi anim aliqua voluptate minim labore incididunt duis consectetur proident. Amet magna minim adipisicing occaecat consequat irure excepteur magna labore aliquip consequat pariatur ut mollit. In consequat ad pariatur veniam sunt non irure aliquip laboris ut. Eiusmod ut eu cupidatat officia magna voluptate ipsum adipisicing.\r\n"
          },
          {
            name: "Fisher Soto",
            message: "Quis cillum et nisi culpa reprehenderit veniam cupidatat mollit sint eu adipisicing pariatur irure. Nisi est exercitation voluptate mollit ea tempor eu velit voluptate eiusmod commodo. Sunt enim et proident incididunt. Veniam incididunt in nostrud deserunt proident nostrud proident.\r\n"
          },
          {
            name: "Freeman Juarez",
            message: "Voluptate eu proident occaecat ipsum fugiat dolor. Ea mollit id ipsum eu minim culpa Lorem quis minim proident. Ad mollit aliquip ipsum proident irure incididunt incididunt pariatur amet consectetur sint. Id eiusmod deserunt sint sunt sunt voluptate tempor deserunt elit nostrud cupidatat ad consectetur amet.\r\n"
          },
          {
            name: "Randi Parrish",
            message: "Excepteur consectetur reprehenderit sit occaecat. Eiusmod ex excepteur ullamco ea. Laborum eu aliqua est laboris officia consequat id. Irure laboris consectetur exercitation nostrud et magna commodo. Voluptate ea eu cillum dolor dolore occaecat non qui enim Lorem laborum cillum cupidatat. Id quis laborum culpa esse nostrud anim qui consequat sunt adipisicing fugiat reprehenderit.\r\n"
          },
          {
            "name": "Espinoza Rodgers",
            "message": "Consequat labore sunt fugiat est quis pariatur dolore sit eiusmod cillum consectetur. Ut aliqua ex do dolore velit anim labore. Ex enim et dolor eu. Sunt ex ipsum esse ea aute consectetur cupidatat reprehenderit.\r\n"
          },
          {
            name: "Stone Albert",
            message: "Nostrud cupidatat cupidatat irure mollit est. Nulla velit commodo cillum consectetur occaecat. Sit eiusmod veniam ut in ad aliqua excepteur. Incididunt occaecat velit duis aliqua occaecat excepteur. Anim labore ipsum incididunt et et consectetur deserunt cupidatat. Veniam veniam do amet laboris ea cupidatat voluptate ex id. Aliqua consequat et sint et proident deserunt cupidatat est excepteur ex consequat.\r\n"
          },
          {
            name: "Porter Levine",
            message: "Culpa ad voluptate proident non deserunt. Cillum tempor voluptate culpa culpa deserunt nisi tempor enim cupidatat eu excepteur. Reprehenderit proident consectetur est duis elit et. Consectetur excepteur id nisi et ex exercitation reprehenderit amet. Officia amet incididunt aliqua aute irure nisi reprehenderit. Tempor esse laboris consequat reprehenderit incididunt. Duis velit anim excepteur ullamco voluptate dolore anim aute fugiat fugiat.\r\n"
          },
          {
            name: "Le Rocha",
            message: "Consectetur id veniam minim minim cillum tempor sint. Est irure duis sint duis exercitation ex tempor ad. Tempor sunt excepteur fugiat reprehenderit laboris proident consectetur consequat cillum id esse. Do ex eu ut ad mollit duis consequat ea ut occaecat. Excepteur pariatur cupidatat officia et. Velit consequat aliqua velit culpa id sint laboris in incididunt sint magna aute eu eiusmod. Qui magna aute cillum amet aute magna qui esse voluptate.\r\n"
          },
          {
            name: "Kelley Mccall",
            message: "Pariatur aliquip non pariatur incididunt est mollit officia dolore ad et est excepteur Lorem Lorem. Dolore do incididunt dolore esse amet minim ex cillum laboris. Fugiat duis minim sunt sunt ea labore aliquip. Voluptate adipisicing eu nisi cupidatat tempor nulla commodo.\r\n"
          },
          {
            name: "Pearlie Cooper",
            message: "Duis anim Lorem ad magna sunt magna laboris exercitation magna do amet exercitation nulla anim. Deserunt adipisicing ea labore anim duis irure ut cillum in enim nulla. Excepteur anim magna anim irure quis et minim elit adipisicing nostrud reprehenderit veniam id. Esse labore in ut incididunt mollit consequat eu. Ut esse do quis excepteur ex adipisicing sint nostrud in proident esse dolore. Consequat aliquip consequat quis magna voluptate qui velit excepteur esse elit aliqua commodo et occaecat. Nisi nisi commodo reprehenderit commodo non ad mollit laborum.\r\n"
          },
          {
            name: "Oconnor Gill",
            message: "Esse laborum dolore officia labore. Consectetur elit veniam quis amet adipisicing dolor labore ex dolor sint laboris adipisicing. Incididunt in cupidatat in consectetur duis fugiat ad nostrud deserunt est ullamco. Mollit nostrud voluptate eiusmod quis eu officia duis ea sint. Id nostrud ipsum id ea est sunt irure est elit. Est nostrud ad deserunt ex ea sint occaecat fugiat.\r\n"
          },
          {
            name: "Lenore Abbott",
            message: "Proident sit proident qui est minim nulla ut incididunt magna consectetur sunt nisi irure occaecat. Aliquip laborum nisi exercitation ut occaecat sunt ullamco fugiat. Velit sunt eu officia sunt laboris reprehenderit excepteur reprehenderit veniam enim in ex qui cillum. Qui proident officia ipsum ex excepteur minim culpa ipsum aliqua. Enim irure magna dolore mollit in aute aliquip cillum. Adipisicing deserunt laboris fugiat Lorem adipisicing deserunt. Aliqua consectetur do est cupidatat aute deserunt excepteur ipsum.\r\n"
          },
          {
            name: "Ruiz Figueroa",
            message: "Non amet labore occaecat voluptate sit qui commodo culpa voluptate elit duis ipsum do ullamco. Proident velit tempor incididunt nulla. Est mollit aliqua adipisicing cupidatat sit occaecat minim sit laboris irure. Reprehenderit in officia nostrud veniam sint nisi ad et id tempor ut et anim. Amet nisi Lorem eiusmod officia adipisicing nostrud laborum commodo cupidatat. Nulla nisi fugiat sunt irure excepteur cupidatat nulla.\r\n"
          },
          {
            name: "Stephens Shannon",
            message: "Ipsum occaecat dolore est Lorem sunt irure excepteur mollit. Cupidatat ipsum Lorem irure do commodo excepteur pariatur. Occaecat officia dolor veniam velit sint consequat Lorem consequat ad esse duis ullamco officia.\r\n"
          },
          {
            name: "Juliana Knowles",
            message: "Consequat aliquip in velit deserunt velit adipisicing ullamco commodo laboris aliquip labore incididunt reprehenderit. Cupidatat amet ex deserunt anim nisi cillum exercitation ullamco nulla occaecat excepteur quis exercitation Lorem. Reprehenderit do fugiat adipisicing reprehenderit consectetur aliqua tempor in tempor voluptate consequat minim ipsum. Ex ad cupidatat esse magna Lorem eu et irure laboris magna nostrud id adipisicing et. Dolore voluptate dolore culpa dolor consectetur aute irure nulla irure commodo officia eu. Mollit occaecat magna ut nisi excepteur minim dolore voluptate incididunt ut magna velit proident. Nulla laboris id exercitation et mollit.\r\n"
          },
          {
            name: "Michele Dorsey",
            message: "Officia nulla sint officia irure. Deserunt esse dolore ea ipsum in consectetur non ipsum do et. Pariatur nostrud culpa est aliqua tempor esse esse sint quis eu laboris dolore non do. Officia magna deserunt adipisicing ex occaecat sunt ipsum elit exercitation duis ut ea. Ullamco reprehenderit anim sunt adipisicing mollit minim cupidatat deserunt minim anim. Pariatur veniam incididunt non Lorem culpa sunt nulla ipsum tempor elit eiusmod. Do ullamco fugiat eu excepteur laboris exercitation eiusmod laborum do mollit.\r\n"
          },
          {
            name: "Zamora Fowler",
            message: "Magna officia et velit deserunt ad non nisi qui anim. Quis mollit ut irure et aliqua. Labore ipsum in qui eu laboris do non do tempor aliquip tempor qui nisi. Aliquip incididunt ut ad ex amet excepteur magna incididunt. Ea nulla aute sit veniam enim eiusmod consectetur proident dolore labore consequat mollit. Do id laborum proident proident labore ut. Consectetur elit voluptate veniam do aliqua.\r\n"
          },
          {
            name: "Cheri Bean",
            message: "Aliqua officia in id esse nulla tempor ea quis cillum excepteur aliquip cupidatat excepteur exercitation. Consectetur consequat exercitation sunt aliquip laborum nostrud irure. Tempor sit reprehenderit fugiat culpa exercitation anim Lorem do. Ex sunt est labore ullamco cupidatat esse. Aute est ut elit dolor. Eiusmod deserunt exercitation consequat duis anim enim velit sint laboris nisi labore ipsum aute.\r\n"
          },
          {
            name: "Aurora Lee",
            message: "Commodo adipisicing reprehenderit qui irure eiusmod. Enim excepteur laborum incididunt ad. Nostrud elit velit culpa tempor consectetur sit commodo dolore dolore ex amet aute duis culpa. Voluptate sunt cillum id consequat non anim magna. Elit occaecat enim velit eiusmod. Cupidatat dolor occaecat dolore cupidatat ipsum aliqua Lorem Lorem anim ut aute adipisicing nostrud. Nostrud adipisicing nulla do commodo.\r\n"
          },
          {
            name: "Kim Lamb",
            message: "In aliqua id ipsum elit sit incididunt proident. Lorem sint adipisicing elit anim quis magna cillum est aute nulla magna dolore sunt nulla. Quis velit cupidatat velit laboris incididunt. Mollit sint incididunt nostrud occaecat excepteur fugiat excepteur. Consectetur aute eu id ipsum est sunt magna excepteur elit occaecat eiusmod dolore voluptate ut. Magna aliqua sunt proident amet ex culpa irure. Aliquip exercitation id minim ex ipsum laborum excepteur enim.\r\n"
          }
      ]);
    });
};
