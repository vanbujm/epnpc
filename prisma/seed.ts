// eslint-disable-next-line import/no-extraneous-dependencies
import { Photon, Aptitude, MorphCreateInput } from '@generated/photon';

const photon = new Photon();

async function main() {
  const skills: ([string, Aptitude])[] = [
    ['Athletics', 'SOM'],
    ['Deceive', 'SAV'],
    ['Fray', 'REF'],
    ['Free Fall', 'SOM'],
    ['Guns', 'REF'],
    ['Hardware', 'COG'],
    ['Infiltrate', 'REF'],
    ['Infosec', 'COG'],
    ['Interface', 'COG'],
    ['Kinesics', 'SAV'],
    ['Medicine', 'COG'],
    ['Melee', 'SOM'],
    ['Perceive', 'INT'],
    ['Persuade', 'SAV'],
    ['Pilot', 'REF'],
    ['Program', 'COG'],
    ['Provoke', 'SAV'],
    ['Psi', 'WIL'],
    ['Research', 'INT'],
    ['Survival', 'INT']
  ];

  await Promise.all(
    skills.map(([name, linkedAptitude]) =>
      photon.skills.upsert({
        where: { name },
        create: {
          name,
          linkedAptitude
        },
        update: {
          name,
          linkedAptitude
        }
      })
    )
  );

  const wares: string[] = [
    'Biomods',
    'Cortical Stack',
    'Mesh Inserts',
    'Circadian Regulation',
    'Cold Tolerance',
    'Clean Metabolism',
    'Cortical Stack (optional)',
    'Enhanced Pheromones',
    'Enhanced Vision',
    'Hibernation',
    'Bioweave Armor (+2/+3)',
    'Grip Pads',
    'Mnemonics',
    'Access Jacks',
    'Cyberbrain',
    'Claws',
    'Gills',
    'Carapace Armor (+6/+7)',
    'Scent Alteration',
    'Oxygen Reserve',
    'Weapon Mount (Articulated, 4)',
    'Direction Sense',
    'Polarization Vision',
    '360-Degree Vision',
    'Wings',
    'Lidar',
    'Skinflex',
    'Enhanced Hearing',
    'Eelware',
    'Nanotat ID Flux',
    'Enhanced Smell',
    'Puppet Sock',
    'Chameleon Skin',
    'Radiation Sense',
    'Enhanced Security',
    'Copylock',
    'Memory Lock',
    'Stress Control',
    'E-Veil',
    'Vacuum Sealing',
    'Drone Rig',
    'Magnetic System',
    'Anti-Glare',
    'Oracles',
    'Retracting Limbs',
    'Pneumatics',
    'Radar',
    'Skinlink',
    'Prehensile Tail',
    'T-Ray Emitter',
    'Prehensile Feet',
    'Sex Switch',
    'Enhanced Respiration'
  ];

  await Promise.all(
    wares.map(name =>
      photon.wares.upsert({
        where: { name },
        create: {
          name
        },
        update: {
          name
        }
      })
    )
  );

  const morphTraits: string[] = [
    'Exotic Morphology (Level 1)',
    'Exotic Morphology (Level 2)',
    'Exotic Morphology (Level 3)',
    'Non-Human Biochemistry (Level 1)',
    'Non-Human Biochemistry (Level 2)',
    'Limberness (Level 1)',
    'Limberness (Level 2)',
    'Planned Obsolescence',
    'Inherent Flaws',
    'Digital Speed',
    'Enhanced Behavior (Aggressiveness, Level 2; Cooperation, Level 2)',
    'Enhanced Behavior (Patience, Level 2)'
  ];

  await Promise.all(
    morphTraits.map(name =>
      photon.morphTraits.upsert({
        where: { name },
        create: {
          name
        },
        update: {
          name
        }
      })
    )
  );

  const morphs: MorphCreateInput[] = [
    {
      type: 'Biomorph',
      name: 'Flat',
      cost: 0,
      avail: 30,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 0,
      moxie: 0,
      vigor: 0,
      flex: 0,
      movementRate: 'Walker 4/20'
    },
    {
      type: 'Biomorph',
      name: 'Splicer',
      cost: 1,
      avail: 30,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 0,
      moxie: 0,
      vigor: 0,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Exalt',
      cost: 2,
      avail: 30,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 0,
      moxie: 0,
      vigor: 0,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Neotenic',
      cost: 2,
      avail: 50,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 2,
      moxie: 1,
      vigor: 1,
      flex: 0,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Mesh Inserts' },
          { name: 'Circadian Regulation' }
        ]
      },
      notes: 'Small size',
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 1)' }]
      }
    },
    {
      type: 'Biomorph',
      name: 'Ruster',
      cost: 3,
      avail: 70,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 0,
      moxie: 1,
      vigor: 1,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Cold Tolerance' },
          { name: 'Enhanced Respiration' },
          { name: 'Radiation Sense' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Bouncer',
      cost: 4,
      avail: 60,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 1,
      moxie: 0,
      vigor: 1,
      flex: 2,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Cold Tolerance' },
          { name: 'Grip Pads' },
          { name: 'Oxygen Reserve' },
          { name: 'Prehensile Feet' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Limberness (Level 1)' }]
      }
    },
    {
      type: 'Biomorph',
      name: 'Futura',
      cost: 4,
      avail: 25,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 2,
      moxie: 4,
      vigor: 1,
      flex: 0,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Hibernoid',
      cost: 4,
      avail: 70,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 1,
      moxie: 1,
      vigor: 0,
      flex: 2,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Circadian Regulation' },
          { name: 'Clean Metabolism' },
          { name: 'Cold Tolerance' },
          { name: 'Hibernation' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Olympian',
      cost: 4,
      avail: 60,
      wt: 8,
      dur: 40,
      dr: 60,
      insight: 1,
      moxie: 1,
      vigor: 3,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Fury',
      cost: 6,
      avail: 40,
      wt: 10,
      dur: 50,
      dr: 75,
      insight: 1,
      moxie: 1,
      vigor: 4,
      flex: 2,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Bioweave Armor (+2/+3)' },
          { name: 'Enhanced Pheromones' },
          { name: 'Claws' },
          { name: 'Enhanced Vision' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          {
            name:
              'Enhanced Behavior (Aggressiveness, Level 2; Cooperation, Level 2)'
          }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Ghost',
      cost: 6,
      avail: 40,
      wt: 9,
      dur: 45,
      dr: 68,
      insight: 2,
      moxie: 1,
      vigor: 3,
      flex: 2,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Chameleon Skin' },
          { name: 'Grip Pads' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          {
            name: 'Enhanced Behavior (Patience, Level 2)'
          }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Basic Pod',
      cost: 1,
      avail: 80,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 0,
      moxie: 0,
      vigor: 1,
      flex: 0,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Access Jacks' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Planned Obsolescence' }]
      }
    },
    {
      type: 'Biomorph',
      name: 'Worker Pod',
      cost: 3,
      avail: 70,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 0,
      moxie: 0,
      vigor: 2,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Access Jacks' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Novacrab',
      cost: 4,
      avail: 50,
      wt: 9,
      dur: 45,
      dr: 68,
      insight: 0,
      moxie: 0,
      vigor: 3,
      flex: 0,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Access Jacks' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Puppet Sock' },
          { name: 'Carapace Armor (+6/+7)' },
          { name: 'Cold Tolerance' },
          { name: 'Oxygen Reserve' },
          { name: 'Vacuum Sealing' },
          { name: 'Enhanced Respiration' },
          { name: 'Gills' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 3)' },
          { name: 'Non-Human Biochemistry (Level 2)' }
        ]
      },
      notes: 'Claw Attack (DV 2d10)'
    },
    {
      type: 'Biomorph',
      name: 'Pleasure Pod',
      cost: 4,
      avail: 70,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 0,
      moxie: 3,
      vigor: 0,
      flex: 0,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Access Jacks' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Puppet Sock' },
          { name: 'Clean Metabolism' },
          { name: 'Enhanced Pheromones' },
          { name: 'Scent Alteration' },
          { name: 'Sex Switch' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Security Pod',
      cost: 5,
      avail: 60,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 1,
      moxie: 0,
      vigor: 2,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Access Jacks' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Puppet Sock' },
          { name: 'Bioweave Armor (+2/+3)' },
          { name: 'Claws' },
          { name: 'Eelware' },
          { name: 'Enhanced Hearing' },
          { name: 'Enhanced Vision' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Shaper',
      cost: 5,
      avail: 40,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 1,
      moxie: 2,
      vigor: 0,
      flex: 0,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Access Jacks' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Puppet Sock' },
          { name: 'Chameleon Skin' },
          { name: 'Nanotat ID Flux' },
          { name: 'Sex Switch' },
          { name: 'Skinflex' },
          { name: 'Mesh Inserts' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Neo-Avian',
      cost: 0,
      avail: 50,
      wt: 5,
      dur: 25,
      dr: 38,
      insight: 2,
      moxie: 1,
      vigor: 0,
      flex: 0,
      movementRate: 'Walker 2/8, Winged 8/40',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Claws' },
          { name: 'Direction Sense' },
          { name: 'Enhanced Vision' },
          { name: 'Prehensile Feet' },
          { name: 'Wings' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 3)' },
          { name: 'Non-Human Biochemistry (Level 2)' }
        ]
      },
      notes: 'Beak/Claw Attack (DV 2d6), Small size'
    },
    {
      type: 'Biomorph',
      name: 'Neo-Bonobo',
      cost: 1,
      avail: 50,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 0,
      moxie: 2,
      vigor: 1,
      flex: 0,
      movementRate: 'Walker 4/12',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Enhanced Smell' },
          { name: 'Prehensile Feet' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 1)' },
          { name: 'Non-Human Biochemistry (Level 1)' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Neo-Chimp',
      cost: 1,
      avail: 50,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 0,
      moxie: 2,
      vigor: 1,
      flex: 0,
      movementRate: 'Walker 4/12',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Enhanced Smell' },
          { name: 'Prehensile Feet' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 1)' },
          { name: 'Non-Human Biochemistry (Level 1)' }
        ]
      }
    },
    {
      type: 'Biomorph',
      name: 'Neo-Neanderthal',
      cost: 2,
      avail: 35,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 0,
      moxie: 1,
      vigor: 2,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Non-Human Biochemistry (Level 1)' }]
      }
    },
    {
      type: 'Biomorph',
      name: 'Neo-Octopus',
      cost: 3,
      avail: 35,
      wt: 6,
      dur: 30,
      dr: 45,
      insight: 1,
      moxie: 1,
      vigor: 1,
      flex: 2,
      movementRate: 'Swim 4/20, Thrust Vector 4/12, Walker 2/8',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: '360-Degree Vision' },
          { name: 'Chameleon Skin' },
          { name: 'Gills' },
          { name: 'Polarization Vision' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 3)' },
          { name: 'Limberness (Level 2)' },
          { name: 'Non-Human Biochemistry (Level 2)' }
        ]
      },
      notes:
        '8 prehensile arms, Beak Attack (DV 1d10), Ink Attack (use Athletics, blinding, 5-meter uniform area-effect in water and micrograv'
    },
    {
      type: 'Biomorph',
      name: 'Neo-Orangutan',
      cost: 3,
      avail: 35,
      wt: 7,
      dur: 35,
      dr: 53,
      insight: 1,
      moxie: 1,
      vigor: 2,
      flex: 0,
      movementRate: 'Walker 4/12',
      ware: {
        connect: [
          { name: 'Biomods' },
          { name: 'Cortical Stack' },
          { name: 'Enhanced Smell' },
          { name: 'Prehensile Feet' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Non-Human Biochemistry (Level 1)' },
          { name: 'Limberness (Level 1)' },
          { name: 'Exotic Morphology (Level 1)' }
        ]
      }
    },
    {
      type: 'Synthmorph',
      name: 'Case',
      cost: 0,
      avail: 100,
      wt: 5,
      dur: 25,
      dr: 50,
      insight: 0,
      moxie: 0,
      vigor: 0,
      flex: 0,
      movementRate: 'Walker 4/12',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Lidar' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Inherent Flaws' },
          { name: 'Exotic Morphology (Level 3)' }
        ]
      },
      notes: 'Light Frame (Armor 6/4), Small size'
    },
    {
      type: 'Synthmorph',
      name: 'Spare',
      cost: 0,
      avail: 80,
      wt: 3,
      dur: 15,
      dr: 30,
      insight: 0,
      moxie: 1,
      vigor: 0,
      flex: 0,
      movementRate: 'Walker 4/12',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack (optional)' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Lidar' },
          { name: 'Grip Pads' },
          { name: 'Skinlink' },
          { name: 'Stress Control' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [
          { name: 'Inherent Flaws' },
          { name: 'Exotic Morphology (Level 3)' }
        ]
      },
      notes: 'Light Frame (Armor 6/4), Small size'
    },
    {
      type: 'Synthmorph',
      name: 'Dragonfly',
      cost: 1,
      avail: 70,
      wt: 5,
      dur: 25,
      dr: 50,
      insight: 1,
      moxie: 0,
      vigor: 1,
      flex: 0,
      movementRate: 'Walker 2/8, Winged 8/32',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Prehensile Tail' },
          { name: 'Radar' },
          { name: 'Wings' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 3)' }]
      },
      notes: 'Light Frame (Armor 6/4), Small size'
    },
    {
      type: 'Synthmorph',
      name: 'Swarmanoid',
      cost: 3,
      avail: 60,
      wt: 0,
      dur: 50,
      dr: 100,
      insight: 2,
      moxie: 0,
      vigor: 0,
      flex: 0,
      movementRate: 'Hopper 4/12, Rotor 4/20, Walker 2/8',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: '360-Degree Vision' },
          { name: 'Lidar' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 3)' }]
      },
      notes:
        'Swarm Attack (DV 1d6, ignores armor, blinding), comes with specialized swarmanoid hive'
    },
    {
      type: 'Synthmorph',
      name: 'Synth',
      cost: 3,
      avail: 80,
      wt: 8,
      dur: 40,
      dr: 80,
      insight: 0,
      moxie: 0,
      vigor: 1,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Lidar' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 1)' }]
      },
      notes: 'Light Frame (Armor 6/4)'
    },
    {
      type: 'Synthmorph',
      name: 'Savant',
      cost: 4,
      avail: 50,
      wt: 7,
      dur: 35,
      dr: 70,
      insight: 3,
      moxie: 0,
      vigor: 1,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Lidar' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 1)' }]
      },
      notes: 'Light Frame (Armor 6/4)'
    },
    {
      type: 'Synthmorph',
      name: 'Galatea',
      cost: 5,
      avail: 50,
      wt: 8,
      dur: 40,
      dr: 80,
      insight: 1,
      moxie: 2,
      vigor: 1,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Mnemonics' },
          { name: 'Lidar' },
          { name: 'Enhanced Hearing' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 1)' }]
      },
      notes: 'Light Frame (Armor 6/4)'
    },
    {
      type: 'Synthmorph',
      name: 'Slitheroid',
      cost: 5,
      avail: 50,
      wt: 9,
      dur: 45,
      dr: 90,
      insight: 0,
      moxie: 1,
      vigor: 3,
      flex: 0,
      movementRate: 'Roller 8/32, Snake 4/12',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Retracting Limbs' },
          { name: 'Mnemonics' },
          { name: 'Enhanced Vision' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 2)' }]
      },
      notes: 'Medium Frame (Armor 8/6)'
    },
    {
      type: 'Synthmorph',
      name: 'Steel Morph',
      cost: 5,
      avail: 50,
      wt: 8,
      dur: 40,
      dr: 80,
      insight: 0,
      moxie: 1,
      vigor: 3,
      flex: 1,
      movementRate: 'Walker 4/20',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Lidar' },
          { name: 'Mnemonics' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 1)' }]
      },
      notes: 'Medium Frame (Armor 8/6)'
    },
    {
      type: 'Synthmorph',
      name: 'Arachnoid',
      cost: 6,
      avail: 40,
      wt: 11,
      dur: 55,
      dr: 110,
      insight: 1,
      moxie: 0,
      vigor: 3,
      flex: 0,
      movementRate:
        'Hopper 4/12, Thrust Vector 8/40, Walker 4/20, Wheeled 8/40',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: 'Lidar' },
          { name: 'Mnemonics' },
          { name: 'Magnetic System' },
          { name: 'Pneumatics' },
          { name: 'Retracting Limbs' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 3)' }]
      },
      notes: 'Medium Frame (Armor 8/6)'
    },
    {
      type: 'Synthmorph',
      name: 'Reaper',
      cost: 12,
      avail: 10,
      wt: 12,
      dur: 60,
      dr: 120,
      insight: 1,
      moxie: 0,
      vigor: 6,
      flex: 1,
      movementRate: 'Hopper 4/20, Ionic 8/40, Thrust Vector 8/40, Walker 4/20',
      ware: {
        connect: [
          { name: 'Access Jacks' },
          { name: 'Cortical Stack' },
          { name: 'Cyberbrain' },
          { name: '360-Degree Vision' },
          { name: 'Anti-Glare' },
          { name: 'Mnemonics' },
          { name: 'Magnetic System' },
          { name: 'Pneumatics' },
          { name: 'Radar' },
          { name: 'T-Ray Emitter' },
          { name: 'Weapon Mount (Articulated, 4)' },
          { name: 'Retracting Limbs' },
          { name: 'Puppet Sock' },
          { name: 'Mesh Inserts' }
        ]
      },
      traits: {
        connect: [{ name: 'Exotic Morphology (Level 3)' }]
      },
      notes: 'Heavy Frame (Armor 12/10)'
    },
    {
      type: 'Infomorph',
      name: 'Digimorph',
      cost: 0,
      avail: 100,
      wt: 5,
      dur: 25,
      dr: 50,
      insight: 0,
      moxie: 0,
      vigor: 0,
      flex: 0,
      ware: {
        connect: [{ name: 'Mnemonics' }]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 3)' },
          { name: 'Digital Speed' }
        ]
      }
    },
    {
      type: 'Infomorph',
      name: 'Ikon',
      cost: 1,
      avail: 100,
      wt: 6,
      dur: 30,
      dr: 60,
      insight: 1,
      moxie: 3,
      vigor: 0,
      flex: 0,
      ware: {
        connect: [
          { name: 'Mnemonics' },
          { name: 'Copylock' },
          { name: 'Memory Lock' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 3)' },
          { name: 'Digital Speed' }
        ]
      }
    },
    {
      type: 'Infomorph',
      name: 'Agent',
      cost: 2,
      avail: 100,
      wt: 8,
      dur: 40,
      dr: 80,
      insight: 4,
      moxie: 0,
      vigor: 0,
      flex: 0,
      ware: {
        connect: [
          { name: 'Mnemonics' },
          { name: 'Enhanced Security' },
          { name: 'E-Veil' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 3)' },
          { name: 'Digital Speed' }
        ]
      }
    },
    {
      type: 'Infomorph',
      name: 'Operator',
      cost: 2,
      avail: 100,
      wt: 7,
      dur: 35,
      dr: 70,
      insight: 3,
      moxie: 0,
      vigor: 0,
      flex: 1,
      ware: {
        connect: [
          { name: 'Mnemonics' },
          { name: 'Drone Rig' },
          { name: 'Oracles' }
        ]
      },
      traits: {
        connect: [
          { name: 'Exotic Morphology (Level 3)' },
          { name: 'Digital Speed' }
        ]
      }
    }
  ];

  await Promise.all(
    morphs.map(morphInput =>
      photon.morphs.upsert({
        where: { name: morphInput.name },
        create: morphInput,
        update: morphInput
      })
    )
  );
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
