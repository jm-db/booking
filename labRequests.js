var labEvents = [
  { title: 'EPEX Workshop / Blanka M.', start: '2019-04-01T13:00:00',  end: '2019-04-01T16:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'BuBa Meeting', start: '2019-04-09T14:00:00',  end: '2019-04-01T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'BuBa Meeting', start: '2019-04-10T09:00:00',  end: '2019-04-10T11:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'EPEX visit / Blanka M.', start: '2019-04-23T12:30:00',  end: '2019-04-23T21:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Test COP / Blanka M.', start: '2019-03-28T14:00:00',  end: '2019-03-28T15:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Scrum COP / Blanka M.', start: '2019-03-26T14:30:00',  end: '2019-03-26T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'RRH CoP / Frantisek H.', start: '2019-03-25T13:00:00', end: '2019-03-25T14:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Stoxx LM / Elena S.', start: '2019-07-10', end: '2019-07-12', resourceId: 'C-MEETROOM' },
  { title: 'RRH Job Interview / Frantisek H.',  start: '2019-03-15T15:00:00', end: '2019-03-15T16:15:00',   resourceId: 'C-MEETROOM' },
  { title: 'Business Operations 2019 Targets Workshop / Alex T.', start: '2019-03-12T13:00:00', end: '2019-03-12T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'M7A UI / Ondrej B.', start: '2019-03-05T09:30:00',  end: '2019-03-05T16:00:00', resourceId: 'C-MEETROOM' },  
  { title: 'OpsGenie Demo For Energy / Alex T.', start: '2019-03-13T09:00:00',  end: '2019-03-13T11:00:00', resourceId: 'C-MEETROOM'    },  
  { title: 'RPA Governance / Michal K.', start: '2019-02-13T10:00:00',  end: '2019-02-13T18:00:00', resourceId: 'C-MEETROOM'    },  
  { title: 'M7T Targets / Ondra V.', start: '2019-02-12T11:00:00',  end: '2019-02-12T12:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'COP Meeting / Ondra V.', start: '2019-02-12T14:30:00',  end: '2019-02-12T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'M7A Ref/ Nurhayat S.', start: '2019-02-18T09:00:00', end: '2019-02-18T11:00:00', resourceId: 'C-MEETROOM'},
  { title: 'M7A Ref/ Nurhayat S.', start: '2019-02-18T12:00:00', end: '2019-02-18T14:30:00', resourceId: 'C-MEETROOM'},
  { title: 'EDT Planning / Martin S.', start: '2019-02-18T14:30:00', end: '2019-02-18T18:00:00', resourceId: 'C-MEETROOM'},
  { title: 'On Principles', start: '2019-02-14T16:00:00', end: '2019-02-14T17:00:00', resourceId: 'A-ROUNDTABLE'},
  { title: 'COP Meeting / Ondra V.', start: '2019-01-29T14:30:00',  end: '2019-01-29T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'M7A Cloud / Nurhayat S.', start: '2019-02-19T09:00:00', end: '2019-02-19T11:00:00', resourceId: 'C-MEETROOM'},
  { title: 'M7A Refinement / Nurhayat S.', start: '2019-01-15T12:00:00', end: '2019-01-15T13:00:00', resourceId: 'A-ROUNDTABLE'},
  { title: 'M7A Cloudification / Nurhayat S.', start: '2019-03-04T09:00:00', end: '2019-03-04T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Recruitment Session / Renata P.', start: '2019-03-25T14:00:00', end: '2019-03-25T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #1/ Tomas K.', start: '2019-03-21T17:30:00', end: '2019-03-21T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #2/ Tomas K.', start: '2019-03-28T17:30:00', end: '2019-03-28T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #3/ Tomas K.', start: '2019-04-04T17:30:00', end: '2019-04-04T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #4/ Tomas K.', start: '2019-04-11T17:30:00', end: '2019-04-11T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'EDT Meeting / Michal K.', start: '2019-03-12', end: '2019-03-16', resourceId: 'B-LONGTABLE' },
  { title: 'Meeting / Ali E.', start: '2019-03-21T09:00:00', end: '2019-03-21T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Meeting / Guilhem C.', start: '2019-04-02T16:00:00', end: '2019-04-02T17:00:000', resourceId: 'C-MEETROOM' },
  { title: 'Marketing Workshop / Kamila L.', start: '2019-03-21T10:00:00', end: '2019-03-21T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Sentinel One Workshop / Josef S.', start: '2019-03-21T13:00:00', end: '2019-03-21T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Days / HR', start: '2019-04-01T09:00:00', end: '2019-04-01T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Days / HR', start: '2019-05-02T09:00:00', end: '2019-05-02T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'User Recertification Check / Elena S.', start: '2019-04-10T15:00:00', end: '2019-04-10T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'User Recertification Check / Elena S.', start: '2019-04-11T10:00:00', end: '2019-04-11T11:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'K8s Training / David R.', start: '2019-04-08', end: '2019-04-11', resourceId: 'B-LONGTABLE' },
  { title: 'Docker Training / David R.', start: '2019-04-15', end: '2019-04-18', resourceId: 'B-LONGTABLE' },
  { title: 'Facility - Carpet fix / Ondrej H.', start: '2019-04-18T08:00:00', end: '2019-04-18T12:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'COP Meeting / Ondra V.', start: '2019-01-15T14:30:00',  end: '2019-01-15T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'HUPX Workshop / Blanka M.',      start: '2019-01-23T08:45:00',  end: '2019-01-24T18:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Reinventing Organisations / Josef P.', start: '2019-01-18T15:00:00', end: '2019-01-18T16:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'COP Meeting / Ondra V.',      start: '2018-12-04T15:00:00',  end: '2018-12-04T16:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'First Friday 2019 / Josef P.', start: '2018-12-07T12:00:00', end: '2018-12-07T13:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'M7A Refinement / Ondra V.',     start: '2018-11-26T12:00:00',  end: '2018-11-26T14:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'M7A Refinement / Ondra V.',     start: '2018-11-26T08:30:00',  end: '2018-11-26T11:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'PWX Workshop / Ondra V.',     start: '2018-11-28T08:00:00',  end: '2018-11-29T17:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'COP Meeting / Ondra V.',      start: '2018-11-13T15:00:00',  end: '2018-11-13T16:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'COP Meeting / Inga M.',      start: '2018-05-30T16:30:00',  end: '2018-05-30T18:00:00', resourceId: 'A-ROUNDTABLE'   },
  { title: 'Maintenance work / Booth',   start: '2018-06-01T08:00:00',  end: '2018-06-01T12:00:00', resourceId: 'X-MAINT'        },
  { title: 'COP Scrum Meeting / Josef P.', start: '2018-06-04',         end: '2018-06-07',          resourceId: 'B-LONGTABLE'    },
  { title: 'Risk IT Meeting / Dirk K.',  start: '2018-06-04T14:00:00',  end: '2018-06-04T15:30:00', resourceId: 'C-MEETROOM'     },
  { title: 'Risk IT RDS/GUI Meeting / Dirk K.',  start: '2018-06-07T13:00:00',  end: '2018-06-07T14:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Statistix Meeting',  start: '2018-06-07T15:00:00',  end: '2018-06-07T16:00:00', resourceId: 'C-MEETROOM'             },
  { title: 'React/Angular Review / Dirk K.',  start: '2018-06-08T14:00:00',  end: '2018-06-08T15:30:00', resourceId: 'C-MEETROOM'},
  { title: 'Risk IT Meetup / Adam N.',  start: '2018-06-11T13:00:00',  end: '2018-06-11T14:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Telco / Wolfgang E.',        start: '2018-06-11T14:30:00',  end: '2018-06-11T15:00:00', resourceId: 'C-MEETROOM'     },
  { title: 'FM Photoshoot / Ondrej H. ', start: '2018-06-13T09:00:00',  end: '2018-06-13T10:00:00', resourceId: 'C-MEETROOM'     },
  { title: 'HR Welcome Days / Vera S. ', start: '2018-06-14T08:00:00',  end: '2018-06-14T12:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'Meeting with ext. / Pavel T.', start: '2018-06-14T12:00:00',  end: '2018-06-14T18:00:00', resourceId: 'C-MEETROOM'    },
  { title: 'POM Meeting / Misa C.',      start: '2018-06-19T14:00:00',  end: '2018-06-19T15:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'M&M Farewell',               start: '2018-06-28T14:00:00',  end: '2018-06-28T18:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'StatistiX / Ondrej.S.',  start: '2018-06-19T11:00:00',  end: '2018-06-019T12:00:00',    resourceId: 'C-MEETROOM'     },
  { title: 'TKAMs / Sam B.',  start: '2018-06-20T14:00:00',      end: '2018-06-20T15:00:00',        resourceId: 'B-LONGTABLE'    },
  { title: 'TKAMs / Sam B.',  start: '2018-06-21T11:00:00',      end: '2018-06-21T12:00:00',        resourceId: 'B-LONGTABLE'    },
  { title: 'Energy Meet / Blanka M.',  start: '2018-06-21T14:00:00',      end: '2018-06-21T15:00:00',  resourceId: 'C-MEETROOM'    },
  { title: 'AMOR Dashboard discussion ',  start: '2018-06-21T15:00:00',  end: '2018-06-21T15:30:00',   resourceId: 'C-MEETROOM'    },
  { title: 'Meet with CVUT rep. / Adela K.',  start: '2018-06-21T15:30:00',  end: '2018-06-21T16:00:00',  resourceId: 'C-MEETROOM'    },
  { title: 'Workflow meet / Martin S.',  start: '2018-06-22T08:30:00',  end: '2018-06-22T09:00:00',  resourceId: 'C-MEETROOM'  },
  { title: 'Opentext Enterprise scan / Pavel T.',  start: '2018-06-22T09:30:00',   end: '2018-06-22T15:30:00', resourceId: 'C-MEETROOM'     },
  { title: 'Coodo Showcase / Anderson M.', start: '2018-06-26T14:00:00',  end: '2018-06-26T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'STX mngm meeting / Ondrej S.',  start: '2018-06-26T10:30:00', end: '2018-06-26T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Clearstream meeting / Michaela C.',  start: '2018-06-26T14:30:00', end: '2018-06-26T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IT Infrastructure Tools Team Workshop / Josef T.',  start: '2018-07-09T13:00:00', end: '2018-07-10T17:00:00',  resourceId: 'B-LONGTABLE' },
  { title: 'IT Infrastructure Tools Team Workshop / Josef T.',  start: '2018-07-11T09:00:00', end: '2018-07-11T16:00:00',  resourceId: 'C-MEETROOM' },
  { title: 'EDT Workshop / Martin S.', start: '2018-07-11', end: '2018-07-14',   resourceId: 'B-LONGTABLE' },
  { title: 'FAR tool sprint planning / Anderson M.',  start: '2018-07-12T14:30:00', end: '2018-07-12T16:00:00',  resourceId: 'C-MEETROOM' },
  { title: 'DifferenceClaimTool sprint end / Marek P.', start: '2018-07-17T10:00:00', end: '2018-07-17T17:00:00', resourceId: 'A-ROUNDTABLE'   },
  { title: 'F5 Workshop / Gabor B.',  start: '2018-07-18', end: '2018-07-20',  resourceId: 'C-MEETROOM' },
  { title: 'FAR Q&A Session on Business requirements / Anderson M.',  start: '2018-07-25T14:00:00', end: '2018-07-25T16:30:00', resourceId: 'C-MEETROOM'},
  { title: 'FAR Sprint Planning / Anderson M.', start: '2018-07-26T11:00:00', end: '2018-07-26T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Tosca Robotics Exchange / Martin S.',  start: '2018-07-26T14:00:00',   end: '2018-07-26T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'HR Meeting / Hana M.',       start: '2018-07-30T15:00:00', end: '2018-07-30T17:00:00',    resourceId: 'C-MEETROOM'     },
  { title: 'Innovation lab talk / Marek H.',  start: '2018-08-01T15:00:00', end: '2018-08-01T16:30:00',   resourceId: 'B-LONGTABLE'},
  { title: 'MFP Config & Overview / Michal P.',  start: '2018-08-02T11:30:00', end: '2018-08-02T12:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Labor Union Meeting / Pavel R.',  start: '2018-08-02T14:30:00', end: '2018-08-02T16:00:00',   resourceId: 'B-LONGTABLE'    },
  { title: 'Knative w/J. Beda / Martin Z.',  start: '2018-08-03T15:00:00', end: '2018-08-03T17:00:00',   resourceId: 'B-LONGTABLE'    },
  { title: 'Opentext Workshop-SAP / Pavel T.',   start: '2018-08-01', end: '2018-08-03',    resourceId: 'C-MEETROOM'     },
  { title: 'Prg meets Lux / Zuzana V.',  start: '2018-08-06T14:00:00', end: '2018-08-06T18:00:00',    resourceId: 'A-ROUNDTABLE'    },
  { title: 'Prg meets Lux / Zuzana V.',  start: '2018-08-07T14:00:00', end: '2018-08-07T18:00:00',    resourceId: 'A-ROUNDTABLE'    },
  { title: 'Energy meet / Pavel P.',  start: '2018-08-07T16:00:00', end: '2018-08-07T18:00:00',    resourceId: 'C-MEETROOM'    },
  { title: 'Prg meets Lux / Zuzana V.',  start: '2018-08-08T14:00:00', end: '2018-08-08T18:00:00',    resourceId: 'A-ROUNDTABLE'     },
  { title: 'HR SSC Prague Meeting / Hana M.',  start: '2018-08-15', end: '2018-08-15',    resourceId: 'B-LONGTABLE'    },
  { title: 'IFS QAs get together / Peter G.', start: '2018-08-17T15:00:00', end: '2018-08-17T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'FAR - Daily / Anderson M.', start: '2018-08-21T10:30:00', end: '2018-08-21T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Energy COP Documentation/Functional / Jana D.', start: '2018-08-22T14:00:00', end: '2018-08-22T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Mgmt Office Meet / Renata D.', start: '2018-08-23T10:00:00', end: '2018-08-23T12:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Labor Union Meeting / Adam R.',  start: '2018-08-23T16:00:00', end: '2018-08-23T17:30:00',   resourceId: 'B-LONGTABLE'    },
  { title: 'COP Meeting / Adam R.',  start: '2018-08-24T10:30:00', end: '2018-08-24T12:00:00',   resourceId: 'C-MEETROOM'    },
  { title: 'Stoxx OpCo. / Stephanie K.',      start: '2018-08-29', end: '2018-08-31',    resourceId: 'B-LONGTABLE'    },
  { title: 'Facility Booking / Ondrej H.',    start: '2018-08-29T09:00:00', end: '2018-08-29T09:30:00',    resourceId: 'C-MEETROOM'    },
  { title: 'Copr. Tools Meeting / Michal P.', start: '2018-08-30T11:30:00', end: '2018-08-30T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'IFS QAs get together / Peter G.', start: '2018-08-31T15:00:00', end: '2018-08-31T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Markdown / Asciidoctor / Petr S.',   start: '2018-09-05T15:00:00', end: '2018-09-05T16:00:00',    resourceId: 'B-LONGTABLE'    },
  { title: 'Markdown use in Energy team / Pavel P.',   start: '2018-09-05T16:00:00', end: '2018-09-05T16:30:00',    resourceId: 'B-LONGTABLE'    },
  { title: 'Risk IT MS Training / Dirk K.',   start: '2018-09-06', end: '2018-09-08',    resourceId: 'B-LONGTABLE'    },
  { title: 'StatistiX Weekly / Ondrej S.',  start: '2018-09-05T14:00:00', end: '2018-09-05T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'MarketPride Meetup / Lucia K.',  start: '2018-09-05T16:30:00', end: '2018-09-05T19:00:00',     resourceId: 'B-LONGTABLE' },
  { title: 'FAR Tool - Daily meeting / Anderson M.', start: '2018-09-06T10:30:00', end: '2018-09-06T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Labor Union Meeting / Adam R.',  start: '2018-09-06T16:00:00', end: '2018-09-06T17:30:00',   resourceId: 'C-MEETROOM' },
  { title: 'Q&A session about talent programmes  / Adela P.',    start: '2018-09-10T14:00:00', end: '2018-09-10T15:00:00',    resourceId: 'B-LONGTABLE'  },
  { title: 'FAR Tool - Daily meeting / Anderson M.', start: '2018-09-11T10:30:00', end: '2018-09-11T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Demo Session / Dirk K.',    start: '2018-09-11T17:00:00', end: '2018-09-11T20:00:00',    resourceId: 'B-LONGTABLE'    },
  { title: 'StatistiX Weekly / Ondrej S.',  start: '2018-09-12T14:00:00', end: '2018-09-12T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'FAR Tool - Daily meeting / Anderson M.', start: '2018-09-13T10:30:00', end: '2018-09-13T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'IFS QAs get together / Peter G.', start: '2018-09-14T15:00:00', end: '2018-09-14T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'MNG OPS Meeting / Michaela C.', start: '2018-09-19T14:00:00', end: '2018-09-19T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Cooperation with VSE / Adela K.',  start: '2018-09-20T09:00:00', end: '2018-09-20T11:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Club Officer Meeting / Dirk K.',  start: '2018-09-20T13:30:00', end: '2018-09-20T14:30:00',     resourceId: 'A-ROUNDTABLE' },
  { title: 'Labor Union Meeting / Adam R.',  start: '2018-09-20T16:00:00', end: '2018-09-20T17:30:00',   resourceId: 'B-LONGTABLE' },
  { title: 'SRE GFF vs Google',  start: '2018-09-25T09:30:00', end: '2018-09-25T12:30:00',   resourceId: 'C-MEETROOM' },  
  { title: 'Weekly StatistiX / Ondrej S.',  start: '2018-09-26T14:00:00', end: '2018-09-26T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Tosca Robotics Exchange / Martin S.',    start: '2018-09-27T14:00:00', end: '2018-09-27T16:00:00',    resourceId: 'B-LONGTABLE'    },
  { title: 'Core Business Training / Armin B.',   start: '2018-10-01', end: '2018-10-04',    resourceId: 'B-LONGTABLE'     },
  { title: 'eListing Architecture Review / Jan K.',  start: '2018-10-02T10:00:00', end: '2018-10-02T13:00:00',   resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2018-10-04T16:00:00', end: '2018-10-04T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'MEGA Status meeting / Michal P.', start: '2018-10-05T14:00:00', end: '2018-10-05T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Welcome Day / Misa C. HR', start: '2018-10-08T08:00:00', end: '2018-10-08T15:00:00', resourceId: 'B-LONGTABLE' },
  { id: 999, title: 'MEGA Status meeting / Michal P.', start: '2018-10-09T10:00:00', end: '2018-10-09T10:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Team meeting / Martina D.', start: '2018-10-09T15:15:00', end: '2018-10-09T16:15:00', resourceId: 'B-LONGTABLE' },
  { title: 'ECB T2S Meeting / Misa C.',  start: '2018-10-09', end: '2018-10-11',     resourceId: 'B-LONGTABLE' },
  { title: 'COP Offsite Meeting / Armin B.',   start: '2018-10-11', end: '2018-10-13',    resourceId: 'C-MEETROOM'     },
  { title: 'STOXX OpCo offsite meeting / Stephanie K.', start: '2018-10-11', resourceId: 'B-LONGTABLE' },
  { id: 999, title: 'MEGA Status meeting / Michal P.', start: '2018-10-16T10:00:00', end: '2018-10-16T10:30:00', resourceId: 'C-MEETROOM' },
  { title: 'DBDC Meeting / Stan S.', start: '2018-10-16T12:30:00', end: '2018-10-16T13:30:00', resourceId: 'C-MEETROOM' },
  { title: 'IBM Cloud / Stan S.',  start: '2018-10-17T10:30:00', end: '2018-10-17T16:30:00',     resourceId: 'C-MEETROOM' },
  { id: 999, title: 'MEGA Status meeting / Michal P.', start: '2018-10-18T10:00:00', end: '2018-10-18T10:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2018-10-18T16:00:00', end: '2018-10-18T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Clarity presentation workshop / Michal P.', start: '2018-10-23T09:00:00', end: '2018-10-23T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Energy meeting / Marek F.', start: '2018-10-23T13:00:00', end: '2018-10-23T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Agile Community of Practice / Ondrej V.', start: '2018-10-23T15:00:00', end: '2018-10-23T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Clearing meeting / Michal P.', start: '2018-10-24T13:00:00', end: '2018-10-24T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Stoxx meeting / Hubert P.', start: '2018-10-26T15:00:00', end: '2018-10-26T16:00:00', resourceId: 'C-MEETROOM' },
  { id: 999, title: 'MEGA Status meeting / Michal P.', start: '2018-10-25T10:00:00', end: '2018-10-25T10:30:00', resourceId: 'C-MEETROOM' },
  { title: 'T-REX Meeting / Martin S.', start: '2018-11-01T14:00:00', end: '2018-11-01T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Asset Servicing Townhall / Ales P.', start: '2018-10-29T14:00:00', end: '2018-10-29T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Energy meeting  / Marek F.', start: '2018-10-29T14:00:00', end: '2018-10-29T16:00:00', resourceId: 'C-MEETROOM' },  
  { title: 'Coffee with Christoph Boehm / Klara O.', start: '2018-10-30T09:00:00', end: '2018-10-30T13:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Scrum Community of Practice / Ondrej V.',  start: '2018-10-30T15:00:00', end: '2018-10-30T16:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'RRH Job interview / Frantisek H.',  start: '2018-10-31T11:00:00', end: '2018-10-31T12:30:00',     resourceId: 'C-MEETROOM' },
  { title: 'Weekly StatistiX / Ondrej S.',  start: '2018-10-31T14:00:00', end: '2018-10-31T15:00:00',     resourceId: 'C-MEETROOM' },
  { id: 999, title: 'MEGA Status meeting / Michal P.', start: '2018-11-01T10:00:00', end: '2018-11-01T10:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2018-11-01T16:00:00', end: '2018-11-01T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'HR Meet / Hana M.', start: '2018-11-02T11:00:00', end: '2018-11-01T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'XBID Product Backlog Refinement / Marek F.', start: '2018-11-05T14:00:00', end: '2018-11-05T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Diversity in real life, Wenche Fredriksen / Veronika T.', start: '2018-11-07T09:00:00', end: '2018-11-07T10:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Agile Community of Practice / Ondrej V.', start: '2018-11-06T15:00:00', end: '2018-11-06T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Welcome Day / HR', start: '2018-11-07T10:30:00', end: '2018-11-07T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'XBID Sprint review/planning / Marek F.', start: '2018-11-08T10:00:00', end: '2018-11-08T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Weekly StatistiX / Ondrej S.',  start: '2018-11-08T17:00:00', end: '2018-11-08T18:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'XBID Overall Retrospective / Marek F.', start: '2018-11-08T15:00:00', end: '2018-11-08T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'EDT 4.0 / WSS-EDT', start: '2018-11-08T09:00:00', end: '2018-11-08T10:00:00', resourceId: 'C-MEETROOM' }, 
  { title: 'CorpSys / Lars B.', start: '2018-11-08T15:00:00', end: '2018-11-08T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Intercultural comm. between Eschborn/Prague and Singapore / Frank J.', start: '2018-11-06T09:00:00', end: '2018-11-06T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Recruitment DBS / Tom W.',  start: '2018-11-13T09:00:00', end: '2018-11-13T10:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'RDS Intr discussion for new joiners',    start: '2018-11-12T10:00:00',  end: '2018-11-12T11:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'Knowledge Session - Prague Core Team / Magdalena M.',    start: '2018-11-14T14:00:00',  end: '2018-11-14T17:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Knowledge Session - Prague Core Team / Magdalena M.',    start: '2018-11-15T10:00:00',  end: '2018-11-15T12:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'COP Meeting / Blanka M.',    start: '2018-11-15T15:00:00',  end: '2018-11-15T16:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Intercultural comm. between Eschborn/Prague and Singapore / Frank J.', start: '2018-11-15T09:00:00', end: '2018-11-15T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2018-11-15T16:00:00', end: '2018-11-15T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'EDT planning with / Michal K.', start: '2018-11-19T13:00:00', end: '2018-11-19T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Scrum Community of Practice / Ondrej V.', start: '2018-11-20T15:00:00', end: '2018-11-20T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Talks / Ondrej S.',  start: '2018-11-21T14:00:00', end: '2018-11-21T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Board Games Event / Tomas K.', start: '2018-11-21T17:00:00', end: '2018-11-21T22:00:00', resourceId: 'B-LONGTABLE' }, 
  { title: 'SETI Standup meet / Stan S.', start: '2018-11-22T09:00:00', end: '2018-11-22T09:30:00', resourceId: 'C-MEETROOM' },
  { title: 'EDT Standup meet / Michal K.', start: '2018-11-22T11:00:00', end: '2018-11-22T11:30:00', resourceId: 'C-MEETROOM' },
  { title: '10th COP Anniversary / Misa C.', start: '2018-11-22T13:00:00', end: '2018-11-22T20:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'RDS Knowledge Transfer / Dirk K.', start: '2018-11-23T10:00:00', end: '2018-11-23T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'XBID Product Backlog Refinement / Marek F.', start: '2018-11-26T14:00:00', end: '2018-11-26T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'EDT Workshop / Lars B.', start: '2018-11-26', end: '2018-11-28', resourceId: 'B-LONGTABLE' }, 
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2018-11-29T16:00:00', end: '2018-11-29T17:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'EDT Sprint Review / Martin S.',  start: '2018-12-03T10:00:00', end: '2018-12-03T11:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'EDT Sprint Planning / Martin S.',  start: '2018-12-03T13:00:00', end: '2018-12-03T14:30:00',     resourceId: 'C-MEETROOM' },
  { title: 'Townhall Meeting / Misa C.',  start: '2018-12-04T14:00:00', end: '2018-12-04T15:00:00',     resourceId: 'B-LONGTABLE' },
  { title: 'VC / Peter Hollovic',  start: '2018-12-04T15:30:00', end: '2018-12-04T16:30:00',     resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Future / Ondrej S.',  start: '2018-12-05T14:00:00', end: '2018-12-05T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'ExCo Lunch / Konstanze O.',  start: '2018-12-06T10:00:00', end: '2018-12-06T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'XBID Sprint Review / Marek F.',  start: '2018-12-06T10:00:00', end: '2018-12-06T11:00:00',     resourceId: 'B-LONGTABLE' },
  { title: 'Week of StatistiX / Ondrej S.',  start: '2018-12-12T14:00:00', end: '2018-12-12T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Corporate Systems get-together / Ondrej S.',  start: '2018-12-12T15:30:00', end: '2018-12-12T17:30:00',     resourceId: 'A-ROUNDTABLE' }, 
  { title: 'HR Christmass Charity Shop / Mia M.', start: '2018-12-18T08:00:00', end: '2018-12-18T19:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'XBID Sprint Review / Marek F.', start: '2018-11-22T10:00:00', end: '2018-11-22T11:00:00', resourceId: 'C-MEETROOM' },
  { title: 'M7 Internal Workshop / Kamil O.', start: '2018-11-22T14:00:00', end: '2018-11-22T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Energy DWH #1/ Pavel P.', start: '2018-12-12T10:00:00', end: '2018-12-12T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Energy DWH #2/ Pavel P.', start: '2018-12-12T13:00:00', end: '2018-12-12T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Qlik Workshop / Preuss M.', start: '2018-12-13T11:00:00', end: '2018-12-13T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Innovation lab talk / Pavel P.', start: '2018-12-13T14:00:00', end: '2018-12-13T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2018-12-13T16:00:00', end: '2018-12-13T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'MEGA Replacement - Design / Preuss M.', start: '2018-12-17T15:00:00', end: '2018-12-17T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'PrismaTestTeam - BBS / Tomas A.', start: '2018-12-04T11:30:00', end: '2018-12-04T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Job interview / Frantisek H.',  start: '2018-12-19T14:00:00', end: '2018-12-19T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Christmas MNG Meeting / Misa C.', start: '2018-12-21T14:00:00', end: '2018-12-21T15:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Stx Meeting / Ondrej S.', start: '2019-01-02T14:00:00', end: '2019-01-02T14:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'RRH Job interview / Frantisek H.',  start: '2019-01-03T09:00:00', end: '2019-01-03T10:30:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Job interview / Frantisek H.',  start: '2019-01-09T10:00:00', end: '2019-01-09T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Weekly/ Ondrej S.',  start: '2019-01-09T14:00:00', end: '2019-01-09T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'XBID Sprint Review / Marek F.',  start: '2019-01-09T15:00:00', end: '2019-01-09T16:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'SDT Services / Martin S.', start: '2019-01-10T10:00:00', end: '2019-01-10T11:00:00', resourceId: 'C-MEETROOM' },
  { title: 'SETI Brainstorming / Stan S.', start: '2019-01-10T11:00:00', end: '2019-01-10T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Job interview planning / Frantisek H.',  start: '2019-01-10T13:30:00', end: '2019-01-10T14:00:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Conf call with service provider / Frantisek H.',  start: '2019-01-10T14:00:00', end: '2019-01-10T15:15:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-01-10T16:00:00', end: '2019-01-10T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'SETI Meet / Stan S.', start: '2019-01-15T09:00:00', end: '2019-01-15T10:00:00', resourceId: 'C-MEETROOM' },
  { title: 'STOXX Meet / John A.', start: '2019-01-15T12:00:00', end: '2019-01-15T13:30:00', resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Coordination/ Ondrej S.',  start: '2019-01-16T14:00:00', end: '2019-01-16T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'R7 GUI Architecture / Dirk K.', start: '2019-01-14T10:00:00', end: '2019-01-14T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'COP Meet / Martina D.', start: '2019-01-15T09:00:00', end: '2019-01-15T10:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'StatistiX Coordination/ Ondrej S.',  start: '2019-01-30T14:00:00', end: '2019-01-30T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Travellers Club / Marketa T', start: '2019-02-06T16:00:00', end: '2019-02-06T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-01-24T16:00:00', end: '2019-01-24T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Linux Security Meeting / Pascal V.', start: '2019-01-30T11:15:00', end: '2019-01-30T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Workshop & Planning - TSA / Sebastian N.', start: '2019-02-04T09:30:00', end: '2019-02-05T18:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Workshop & Planning - TSA / Sebastian N.', start: '2019-02-04T12:30:00', end: '2019-02-05T19:00:00', resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Week/ Ondrej S.',  start: '2019-02-06T14:00:00', end: '2019-02-06T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'HR Training / Vendula S.', start: '2019-02-07T13:00:00', end: '2019-02-07T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-02-07T16:00:00', end: '2019-02-07T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Maintenance Work / Stan S.', start: '2019-02-12T09:00:00', end: '2019-02-12T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-02-19T16:00:00', end: '2019-02-19T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'DBP Workshop / Stanimira B.', start: '2019-02-20', end: '2019-02-23', resourceId: 'B-LONGTABLE' },
  { title: 'VC Meeting / Stephan R.', start: '2019-02-22T11:00:00', end: '2019-02-22T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmaster Club Officer Meeting / Dirk K.', start: '2019-02-25T15:00:00', end: '2019-02-25T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'ECP JF / Michal P.', start: '2019-02-26T09:30:00', end: '2019-02-26T10:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Service Work / Stanislav S.', start: '2019-02-27T13:30:00', end: '2019-02-27T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'DT Services / Martin S.', start: '2019-02-28T10:00:00', end: '2019-02-28T11:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Welcome Days / HR', start: '2019-03-01T09:00:00', end: '2019-03-01T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'T. Mann Gymnasium-DBG Introduction / Tom W.', start: '2019-03-01T12:30:00', end: '2019-03-01T13:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Scrum Beer  / Pavel P.', start: '2019-03-05T18:00:00', end: '2019-03-05T21:0:00', resourceId: 'B-LONGTABLE' },
  { title: 'Team Townhall meeting / Fabian H.', start: '2019-03-06T17:00:00', end: '2019-03-06T18:0:00', resourceId: 'B-LONGTABLE' },
  { title: 'Clarity Project Manager training / Michal P.', start: '2019-03-06T11:00:00', end: '2019-03-06T18:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Happiness At Work  / Tom W.', start: '2019-03-07T10:00:00', end: '2019-03-07T12:0:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-03-07T16:00:00', end: '2019-03-07T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Risk IT RDS Design Meeting / Dirk K.', start: '2019-03-08T14:30:00', end: '2019-03-08T16:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Board Games Event / Tomas K.', start: '2019-03-20T17:00:00', end: '2019-03-20T22:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-03-21T16:00:00', end: '2019-03-21T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-26T10:00:00', end: '2019-03-26T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-26T10:00:00', end: '2019-03-26T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-27T10:00:00', end: '2019-03-27T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-27T10:00:00', end: '2019-03-27T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-28T10:00:00', end: '2019-03-28T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-28T10:00:00', end: '2019-03-28T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-04-04T16:00:00', end: '2019-04-04T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'HR Welcome Days / Vera S. ', start: '2019-04-12T08:00:00',  end: '2019-04-12T14:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-04-18T16:00:00', end: '2019-04-18T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Scrum Training / Martin K.', start: '2019-04-24', end: '2019-04-26', resourceId: 'B-LONGTABLE' },
  { title: 'Asset Servicing After-work/ Ales P.',  start: '2019-04-24T17:00:00', end: '2019-04-24T19:00:00',   resourceId: 'C-MEETROOM' },  
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-05-02T16:00:00', end: '2019-05-02T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Happines At Work / Tom W.', start: '2019-05-16T10:00:00', end: '2019-05-16T11:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Future of Recruitment / Tom W.', start: '2019-05-23T09:30:00', end: '2019-05-23T11:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'T2S Prague / Misa/Kamila', start: '2019-06-26T10:00:00', end: '2019-06-27T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'T2S Prague / Misa/Kamila', start: '2019-06-26T10:00:00', end: '2019-06-27T17:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'T2S Prague / Misa/Kamila', start: '2019-06-26T10:00:00', end: '2019-06-27T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Farewell Presentation / Petr P.', start: '2019-01-29T15:30:00', end: '2019-01-29T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IFS IT Section Meeting / Christian P.', start: '2019-01-21T14:00:00', end: '2019-01-21T15:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'COP MNG Meeting / Misa C.', start: '2019-06-18T14:00:00', end: '2019-06-18T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Core Business Training / Kamila L.', start: '2019-06-19', end: '2019-06-22', resourceId: 'B-LONGTABLE' },
  { title: 'COP OPS Meeting / Misa C.', start: '2019-06-25T14:00:00', end: '2019-06-25T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Training Preparation / Compliance / Jana A.',  start: '2019-01-17T11:00:00', end: '2019-01-17T14:00:00',   resourceId: 'C-MEETROOM' },
  { title: 'RRH Conf call with service provider / Frantisek H.',  start: '2019-01-17T14:00:00', end: '2019-01-17T14:45:00',   resourceId: 'C-MEETROOM' },
  { title: 'Labor Union Meeting / Adam R.',  start: '2019-01-17T16:00:00', end: '2019-01-17T17:30:00',   resourceId: 'B-LONGTABLE' },
  { title: 'DT services / Martin S.',  start: '2019-02-01T13:00:00', end: '2019-02-01T15:00:00',   resourceId: 'C-MEETROOM' },
  { title: 'Prisma RDS-GUI: re:Invent 2018 / Zdenda P.', start: '2019-01-24T13:00:00', end: '2019-01-24T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'HoU Meeting / Karolina S.', start: '2019-06-18T15:30:00', end: '2019-06-18T16:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Labor Union Meeting / Adam R.',  start: '2019-01-31T16:00:00', end: '2019-01-31T17:30:00',   resourceId: 'B-LONGTABLE' },
  { title: 'Deep Dive Scrum & next steps / Martin S.',  start: '2019-03-20', resourceId: 'C-MEETROOM' }
]
