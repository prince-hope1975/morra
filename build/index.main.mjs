// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_UInt;
  return {
    game_state: {
      allFingersSelected: [ctc0],
      over: [ctc0, ctc1],
      quit: [ctc0],
      start: [ctc0]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc7 = stdlib.T_Data({
    None: ctc5,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc3, ctc1, ctc3, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Players_drawFingers0_111: ctc4,
    Players_joinGame0_111: ctc5,
    Players_makeGuess0_111: ctc4,
    Players_quit0_111: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc8 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  const ctc10 = stdlib.T_Bool;
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v828 = stdlib.protect(ctc1, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v828],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v832], secs: v834, time: v833, didSend: v69, from: v831 } = txn1;
      
      ;
      
      const v837 = [false, false];
      const v839 = [v831, v831];
      const v842 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v843 = v837;
      const v844 = stdlib.checkedBigNumberify('./index.rsh:103:5:decimal', stdlib.UInt_max, '0');
      const v845 = stdlib.checkedBigNumberify('./index.rsh:104:5:decimal', stdlib.UInt_max, '0');
      const v846 = v839;
      const v847 = stdlib.checkedBigNumberify('./index.rsh:102:5:decimal', stdlib.UInt_max, '0');
      const v848 = v833;
      const v851 = stdlib.checkedBigNumberify('./index.rsh:75:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v863 = stdlib.add(v848, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v831,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v832], secs: v834, time: v833, didSend: v69, from: v831 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:98:19:application',
    fs: ['at ./index.rsh:98:19:application call to [unknown function] (defined at: ./index.rsh:98:19:function exp)', 'at ./index.rsh:98:19:application call to "liftedInteract" (defined at: ./index.rsh:98:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v837 = [false, false];
  const v839 = [v831, v831];
  let v842 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v843 = v837;
  let v844 = stdlib.checkedBigNumberify('./index.rsh:103:5:decimal', stdlib.UInt_max, '0');
  let v845 = stdlib.checkedBigNumberify('./index.rsh:104:5:decimal', stdlib.UInt_max, '0');
  let v846 = v839;
  let v847 = stdlib.checkedBigNumberify('./index.rsh:102:5:decimal', stdlib.UInt_max, '0');
  let v848 = v833;
  let v851 = stdlib.checkedBigNumberify('./index.rsh:75:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v863 = stdlib.add(v848, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: ['time', v863],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1763], secs: v1765, time: v1764, didSend: v777, from: v1762 } = txn3;
      undefined /* setApiDetails */;
      ;
      const v1766 = true;
      await txn3.getOutput('Players_informTimeout', 'v1766', ctc10, v1766);
      const cv842 = v842;
      const cv843 = v843;
      const cv844 = v844;
      const cv845 = v845;
      const cv846 = v846;
      const cv847 = v847;
      const cv848 = v1764;
      const cv851 = v851;
      
      v842 = cv842;
      v843 = cv843;
      v844 = cv844;
      v845 = cv845;
      v846 = cv846;
      v847 = cv847;
      v848 = cv848;
      v851 = cv851;
      
      continue;
      }
    else {
      const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn2;
      switch (v948[0]) {
        case 'Players_drawFingers0_111': {
          const v951 = v948[1];
          undefined /* setApiDetails */;
          ;
          const v964 = v951[stdlib.checkedBigNumberify('./index.rsh:193:9:spread', stdlib.UInt_max, '0')];
          const v965 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v947), null);
          const v966 = {
            fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v967 = stdlib.fromSome(v965, v966);
          const v968 = v967.player_number;
          const v969 = stdlib.mod(v968, stdlib.checkedBigNumberify('./index.rsh:56:27:decimal', stdlib.UInt_max, '2'));
          const v971 = stdlib.Array_set(v843, v969, true);
          const v973 = v967.guess;
          const v975 = {
            fingers: v964,
            guess: v973,
            player_number: v968
            };
          await stdlib.mapSet(map0, v947, v975);
          const v976 = v971[stdlib.checkedBigNumberify('./index.rsh:220:28:array ref', stdlib.UInt_max, '1')];
          if (v976) {
            const v977 = true;
            null;
            await txn2.getOutput('Players_drawFingers', 'v968', ctc1, v968);
            const cv842 = v842;
            const cv843 = v971;
            const cv844 = v844;
            const cv845 = v845;
            const cv846 = v846;
            const cv847 = v847;
            const cv848 = v949;
            const cv851 = v851;
            
            v842 = cv842;
            v843 = cv843;
            v844 = cv844;
            v845 = cv845;
            v846 = cv846;
            v847 = cv847;
            v848 = cv848;
            v851 = cv851;
            
            continue;}
          else {
            await txn2.getOutput('Players_drawFingers', 'v968', ctc1, v968);
            const cv842 = v842;
            const cv843 = v971;
            const cv844 = v844;
            const cv845 = v845;
            const cv846 = v846;
            const cv847 = v847;
            const cv848 = v949;
            const cv851 = v851;
            
            v842 = cv842;
            v843 = cv843;
            v844 = cv844;
            v845 = cv845;
            v846 = cv846;
            v847 = cv847;
            v848 = cv848;
            v851 = cv851;
            
            continue;}
          break;
          }
        case 'Players_joinGame0_111': {
          const v1153 = v948[1];
          undefined /* setApiDetails */;
          const v1164 = stdlib.add(v851, v832);
          ;
          const v1197 = stdlib.add(v844, stdlib.checkedBigNumberify('./index.rsh:166:42:decimal', stdlib.UInt_max, '1'));
          const v1198 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:168:29:decimal', stdlib.UInt_max, '1'));
          const v1199 = ' You are the first one here, Be patient for someone else to connect                                                             ';
          const v1200 = 'The game should start now, you can begin playing                                                                                ';
          const v1201 = v1198 ? v1199 : v1200;
          const v1202 = {
            fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            player_number: v844
            };
          await stdlib.mapSet(map0, v947, v1202);
          const v1203 = stdlib.mod(v844, stdlib.checkedBigNumberify('./index.rsh:56:27:decimal', stdlib.UInt_max, '2'));
          const v1205 = stdlib.Array_set(v846, v1203, v947);
          const v1206 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:178:31:decimal', stdlib.UInt_max, '2'));
          if (v1206) {
            const v1207 = true;
            null;
            const v1208 = [v1201, v844];
            await txn2.getOutput('Players_joinGame', 'v1208', ctc8, v1208);
            const v1217 = stdlib.add(v845, v832);
            const cv842 = v842;
            const cv843 = v843;
            const cv844 = v1197;
            const cv845 = v1217;
            const cv846 = v1205;
            const cv847 = v847;
            const cv848 = v949;
            const cv851 = v1164;
            
            v842 = cv842;
            v843 = cv843;
            v844 = cv844;
            v845 = cv845;
            v846 = cv846;
            v847 = cv847;
            v848 = cv848;
            v851 = cv851;
            
            continue;}
          else {
            const v1219 = [v1201, v844];
            await txn2.getOutput('Players_joinGame', 'v1219', ctc8, v1219);
            const v1228 = stdlib.add(v845, v832);
            const cv842 = v842;
            const cv843 = v843;
            const cv844 = v1197;
            const cv845 = v1228;
            const cv846 = v1205;
            const cv847 = v847;
            const cv848 = v949;
            const cv851 = v1164;
            
            v842 = cv842;
            v843 = cv843;
            v844 = cv844;
            v845 = cv845;
            v846 = cv846;
            v847 = cv847;
            v848 = cv848;
            v851 = cv851;
            
            continue;}
          break;
          }
        case 'Players_makeGuess0_111': {
          const v1355 = v948[1];
          undefined /* setApiDetails */;
          ;
          const v1433 = v1355[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
          const v1434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v947), null);
          const v1435 = {
            fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v1436 = stdlib.fromSome(v1434, v1435);
          const v1437 = v1436.player_number;
          const v1441 = v1436.fingers;
          const v1444 = {
            fingers: v1441,
            guess: v1433,
            player_number: v1437
            };
          await stdlib.mapSet(map0, v947, v1444);
          const v1445 = stdlib.eq(v1437, stdlib.checkedBigNumberify('./index.rsh:255:46:application', stdlib.UInt_max, '1'));
          if (v1445) {
            const v1446 = v846[stdlib.checkedBigNumberify('./index.rsh:120:46:array ref', stdlib.UInt_max, '0')];
            const v1447 = v846[stdlib.checkedBigNumberify('./index.rsh:121:46:array ref', stdlib.UInt_max, '1')];
            const v1448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1446), null);
            const v1450 = stdlib.fromSome(v1448, v1435);
            const v1451 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1447), null);
            const v1453 = stdlib.fromSome(v1451, v1435);
            const v1454 = v1450.fingers;
            const v1455 = v1450.guess;
            const v1456 = v1453.fingers;
            const v1457 = v1453.guess;
            let v1458;
            const v1459 = stdlib.eq(v1455, v1457);
            if (v1459) {
              v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v1460 = stdlib.add(v1454, v1456);
              const v1461 = stdlib.eq(v1460, v1455);
              if (v1461) {
                v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                const v1463 = stdlib.eq(v1460, v1457);
                if (v1463) {
                  v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v1464 = [v1454, v1456, v1455, v1457, v1458];
            await txn2.getOutput('Players_makeGuess', 'v1464', ctc9, v1464);
            const v1476 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v1478 = v1476 ? stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, '0') : v845;
            null;
            if (v1476) {
              const v1501 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:139:37:decimal', stdlib.UInt_max, '0'));
              const v1502 = v1501 ? v1446 : v1447;
              const v1506 = stdlib.sub(v851, v1478);
              ;
              const v1510 = stdlib.sub(v845, v1478);
              const cv842 = v1458;
              const cv843 = v837;
              const cv844 = v844;
              const cv845 = v1510;
              const cv846 = v846;
              const cv847 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
              const cv848 = v949;
              const cv851 = v1506;
              
              v842 = cv842;
              v843 = cv843;
              v844 = cv844;
              v845 = cv845;
              v846 = cv846;
              v847 = cv847;
              v848 = cv848;
              v851 = cv851;
              
              continue;}
            else {
              await stdlib.mapSet(map0, v1446, undefined /* Nothing */);
              await stdlib.mapSet(map0, v1447, undefined /* Nothing */);
              const v1480 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:139:37:decimal', stdlib.UInt_max, '0'));
              const v1481 = v1480 ? v1446 : v1447;
              const v1485 = stdlib.sub(v851, v1478);
              ;
              const v1489 = stdlib.sub(v845, v1478);
              const cv842 = v1458;
              const cv843 = v837;
              const cv844 = stdlib.checkedBigNumberify('./index.rsh:144:38:decimal', stdlib.UInt_max, '0');
              const cv845 = v1489;
              const cv846 = v846;
              const cv847 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
              const cv848 = v949;
              const cv851 = v1485;
              
              v842 = cv842;
              v843 = cv843;
              v844 = cv844;
              v845 = cv845;
              v846 = cv846;
              v847 = cv847;
              v848 = cv848;
              v851 = cv851;
              
              continue;}}
          else {
            const v1522 = [v842, v844, v844, v844, v844];
            await txn2.getOutput('Players_makeGuess', 'v1522', ctc9, v1522);
            const v1534 = stdlib.add(v847, stdlib.checkedBigNumberify('./index.rsh:267:20:decimal', stdlib.UInt_max, '1'));
            const cv842 = v842;
            const cv843 = v843;
            const cv844 = v844;
            const cv845 = v845;
            const cv846 = v846;
            const cv847 = v1534;
            const cv848 = v949;
            const cv851 = v851;
            
            v842 = cv842;
            v843 = cv843;
            v844 = cv844;
            v845 = cv845;
            v846 = cv846;
            v847 = cv847;
            v848 = cv848;
            v851 = cv851;
            
            continue;}
          break;
          }
        case 'Players_quit0_111': {
          const v1557 = v948[1];
          undefined /* setApiDetails */;
          ;
          await stdlib.mapSet(map0, v947, undefined /* Nothing */);
          const v1746 = true;
          await txn2.getOutput('Players_quit', 'v1746', ctc10, v1746);
          const v1752 = true;
          null;
          const v1755 = stdlib.sub(v844, stdlib.checkedBigNumberify('./index.rsh:294:21:decimal', stdlib.UInt_max, '1'));
          const cv842 = v842;
          const cv843 = v837;
          const cv844 = v1755;
          const cv845 = v845;
          const cv846 = v846;
          const cv847 = v847;
          const cv848 = v949;
          const cv851 = v851;
          
          v842 = cv842;
          v843 = cv843;
          v844 = cv844;
          v845 = cv845;
          v846 = cv846;
          v847 = cv847;
          v848 = cv848;
          v851 = cv851;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  return;
  
  
  };
export async function _Players_drawFingers3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Players_drawFingers3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Players_drawFingers3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Players_drawFingers0_111: ctc8,
    Players_joinGame0_111: ctc9,
    Players_makeGuess0_111: ctc8,
    Players_quit0_111: ctc9
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const v880 = ctc.selfAddress();
  const v882 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_drawFingers0_111" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'in',
    who: 'Players_drawFingers'
    });
  const v886 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v880), null);
  const v887 = {
    fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v888 = stdlib.fromSome(v886, v887);
  const v889 = v888.player_number;
  const v890 = stdlib.mod(v889, stdlib.checkedBigNumberify('./index.rsh:56:27:decimal', stdlib.UInt_max, '2'));
  const v892 = v843[v890];
  const v893 = v892 ? false : true;
  stdlib.assert(v893, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:197:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_drawFingers0_111" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'You cannot pick a guess more than once',
    who: 'Players_drawFingers'
    });
  const v895 = stdlib.eq(v844, stdlib.checkedBigNumberify('./index.rsh:202:26:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v895, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:202:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_drawFingers0_111" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'Game has not started yet                                                                                                        ',
    who: 'Players_drawFingers'
    });
  let v898;
  switch (v886[0]) {
    case 'None': {
      const v899 = v886[1];
      v898 = false;
      
      break;
      }
    case 'Some': {
      const v900 = v886[1];
      v898 = true;
      
      break;
      }
    }
  stdlib.assert(v898, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_drawFingers0_111" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'You are not part of the game                                                                                                    ',
    who: 'Players_drawFingers'
    });
  const v902 = stdlib.ge(v844, stdlib.checkedBigNumberify('./index.rsh:208:22:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v902, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:207:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_drawFingers0_111" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'Cannot Register fingers after game has started                                                                                  ',
    who: 'Players_drawFingers'
    });
  const v907 = ['Players_drawFingers0_111', v882];
  
  const txn1 = await (ctc.sendrecv({
    args: [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863, v907],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:212:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
      
      switch (v948[0]) {
        case 'Players_drawFingers0_111': {
          const v951 = v948[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Players_drawFingers"
            });
          ;
          const v964 = v951[stdlib.checkedBigNumberify('./index.rsh:193:9:spread', stdlib.UInt_max, '0')];
          const v965 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v947), null);
          const v966 = {
            fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v967 = stdlib.fromSome(v965, v966);
          const v968 = v967.player_number;
          const v969 = stdlib.mod(v968, stdlib.checkedBigNumberify('./index.rsh:56:27:decimal', stdlib.UInt_max, '2'));
          const v971 = stdlib.Array_set(v843, v969, true);
          const v973 = v967.guess;
          const v975 = {
            fingers: v964,
            guess: v973,
            player_number: v968
            };
          await stdlib.simMapSet(sim_r, 0, v947, v975);
          const v976 = v971[stdlib.checkedBigNumberify('./index.rsh:220:28:array ref', stdlib.UInt_max, '1')];
          if (v976) {
            const v977 = true;
            null;
            const v979 = await txn1.getOutput('Players_drawFingers', 'v968', ctc1, v968);
            
            const v2881 = v842;
            const v2882 = v971;
            const v2883 = v844;
            const v2884 = v845;
            const v2885 = v846;
            const v2886 = v847;
            const v2888 = v851;
            const v2889 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
            sim_r.isHalt = false;
            }
          else {
            const v987 = await txn1.getOutput('Players_drawFingers', 'v968', ctc1, v968);
            
            const v2890 = v842;
            const v2891 = v971;
            const v2892 = v844;
            const v2893 = v845;
            const v2894 = v846;
            const v2895 = v847;
            const v2897 = v851;
            const v2898 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Players_joinGame0_111': {
          const v1153 = v948[1];
          
          break;
          }
        case 'Players_makeGuess0_111': {
          const v1355 = v948[1];
          
          break;
          }
        case 'Players_quit0_111': {
          const v1557 = v948[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
  switch (v948[0]) {
    case 'Players_drawFingers0_111': {
      const v951 = v948[1];
      undefined /* setApiDetails */;
      ;
      const v964 = v951[stdlib.checkedBigNumberify('./index.rsh:193:9:spread', stdlib.UInt_max, '0')];
      const v965 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v947), null);
      const v966 = {
        fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v967 = stdlib.fromSome(v965, v966);
      const v968 = v967.player_number;
      const v969 = stdlib.mod(v968, stdlib.checkedBigNumberify('./index.rsh:56:27:decimal', stdlib.UInt_max, '2'));
      const v971 = stdlib.Array_set(v843, v969, true);
      const v973 = v967.guess;
      const v975 = {
        fingers: v964,
        guess: v973,
        player_number: v968
        };
      await stdlib.mapSet(map0, v947, v975);
      const v976 = v971[stdlib.checkedBigNumberify('./index.rsh:220:28:array ref', stdlib.UInt_max, '1')];
      if (v976) {
        const v977 = true;
        null;
        const v979 = await txn1.getOutput('Players_drawFingers', 'v968', ctc1, v968);
        if (v588) {
          stdlib.protect(ctc0, await interact.out(v951, v979), {
            at: './index.rsh:194:7:application',
            fs: ['at ./index.rsh:194:7:application call to [unknown function] (defined at: ./index.rsh:194:7:function exp)', 'at ./index.rsh:223:10:application call to "k" (defined at: ./index.rsh:213:20:function exp)', 'at ./index.rsh:213:20:application call to [unknown function] (defined at: ./index.rsh:213:20:function exp)'],
            msg: 'out',
            who: 'Players_drawFingers'
            });
          }
        else {
          }
        
        const v2881 = v842;
        const v2882 = v971;
        const v2883 = v844;
        const v2884 = v845;
        const v2885 = v846;
        const v2886 = v847;
        const v2888 = v851;
        const v2889 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
        return;
        }
      else {
        const v987 = await txn1.getOutput('Players_drawFingers', 'v968', ctc1, v968);
        if (v588) {
          stdlib.protect(ctc0, await interact.out(v951, v987), {
            at: './index.rsh:194:7:application',
            fs: ['at ./index.rsh:194:7:application call to [unknown function] (defined at: ./index.rsh:194:7:function exp)', 'at ./index.rsh:223:10:application call to "k" (defined at: ./index.rsh:213:20:function exp)', 'at ./index.rsh:213:20:application call to [unknown function] (defined at: ./index.rsh:213:20:function exp)'],
            msg: 'out',
            who: 'Players_drawFingers'
            });
          }
        else {
          }
        
        const v2890 = v842;
        const v2891 = v971;
        const v2892 = v844;
        const v2893 = v845;
        const v2894 = v846;
        const v2895 = v847;
        const v2897 = v851;
        const v2898 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
        return;
        }
      break;
      }
    case 'Players_joinGame0_111': {
      const v1153 = v948[1];
      return;
      break;
      }
    case 'Players_makeGuess0_111': {
      const v1355 = v948[1];
      return;
      break;
      }
    case 'Players_quit0_111': {
      const v1557 = v948[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Players_informTimeout3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Players_informTimeout3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Players_informTimeout3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const v1761 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:301:7:application',
    fs: ['at ./index.rsh:301:7:application call to [unknown function] (defined at: ./index.rsh:301:7:function exp)', 'at ./index.rsh:300:41:application call to [unknown function] (defined at: ./index.rsh:300:41:function exp)'],
    msg: 'in',
    who: 'Players_informTimeout'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863, v1761],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:301:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1763], secs: v1765, time: v1764, didSend: v777, from: v1762 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Players_informTimeout"
        });
      ;
      const v1766 = true;
      const v1767 = await txn1.getOutput('Players_informTimeout', 'v1766', ctc5, v1766);
      
      const v2953 = v842;
      const v2954 = v843;
      const v2955 = v844;
      const v2956 = v845;
      const v2957 = v846;
      const v2958 = v847;
      const v2960 = v851;
      const v2961 = stdlib.add(v1764, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1763], secs: v1765, time: v1764, didSend: v777, from: v1762 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1766 = true;
  const v1767 = await txn1.getOutput('Players_informTimeout', 'v1766', ctc5, v1766);
  stdlib.protect(ctc0, await interact.out(v1763, v1767), {
    at: './index.rsh:301:7:application',
    fs: ['at ./index.rsh:301:7:application call to [unknown function] (defined at: ./index.rsh:301:7:function exp)', 'at ./index.rsh:302:8:application call to "k" (defined at: ./index.rsh:301:7:function exp)', 'at ./index.rsh:300:41:application call to [unknown function] (defined at: ./index.rsh:300:41:function exp)'],
    msg: 'out',
    who: 'Players_informTimeout'
    });
  
  const v2953 = v842;
  const v2954 = v843;
  const v2955 = v844;
  const v2956 = v845;
  const v2957 = v846;
  const v2958 = v847;
  const v2960 = v851;
  const v2961 = stdlib.add(v1764, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
  return;
  
  
  
  };
export async function _Players_joinGame3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Players_joinGame3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Players_joinGame3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    Players_drawFingers0_111: ctc9,
    Players_joinGame0_111: ctc8,
    Players_makeGuess0_111: ctc9,
    Players_quit0_111: ctc8
    });
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Tuple([ctc11, ctc1]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const v865 = ctc.selfAddress();
  const v867 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_joinGame0_111" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'in',
    who: 'Players_joinGame'
    });
  const v869 = stdlib.lt(v844, stdlib.checkedBigNumberify('./index.rsh:154:21:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v869, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:153:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_joinGame0_111" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'Unable to call please wait for other participants to finish game                                                                ',
    who: 'Players_joinGame'
    });
  const v871 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v865), null);
  let v872;
  switch (v871[0]) {
    case 'None': {
      const v873 = v871[1];
      v872 = true;
      
      break;
      }
    case 'Some': {
      const v874 = v871[1];
      v872 = false;
      
      break;
      }
    }
  stdlib.assert(v872, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_joinGame0_111" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'You are already in the game                                                                                                     ',
    who: 'Players_joinGame'
    });
  const v878 = ['Players_joinGame0_111', v867];
  
  const txn1 = await (ctc.sendrecv({
    args: [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863, v878],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v832, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
      
      switch (v948[0]) {
        case 'Players_drawFingers0_111': {
          const v951 = v948[1];
          
          break;
          }
        case 'Players_joinGame0_111': {
          const v1153 = v948[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Players_joinGame"
            });
          const v1164 = stdlib.add(v851, v832);
          sim_r.txns.push({
            amt: v832,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1197 = stdlib.add(v844, stdlib.checkedBigNumberify('./index.rsh:166:42:decimal', stdlib.UInt_max, '1'));
          const v1198 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:168:29:decimal', stdlib.UInt_max, '1'));
          const v1199 = ' You are the first one here, Be patient for someone else to connect                                                             ';
          const v1200 = 'The game should start now, you can begin playing                                                                                ';
          const v1201 = v1198 ? v1199 : v1200;
          const v1202 = {
            fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            player_number: v844
            };
          await stdlib.simMapSet(sim_r, 0, v947, v1202);
          const v1203 = stdlib.mod(v844, stdlib.checkedBigNumberify('./index.rsh:56:27:decimal', stdlib.UInt_max, '2'));
          const v1205 = stdlib.Array_set(v846, v1203, v947);
          const v1206 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:178:31:decimal', stdlib.UInt_max, '2'));
          if (v1206) {
            const v1207 = true;
            null;
            const v1208 = [v1201, v844];
            const v1209 = await txn1.getOutput('Players_joinGame', 'v1208', ctc12, v1208);
            
            const v1217 = stdlib.add(v845, v832);
            const v2980 = v842;
            const v2981 = v843;
            const v2982 = v1197;
            const v2983 = v1217;
            const v2984 = v1205;
            const v2985 = v847;
            const v2987 = v1164;
            const v2988 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
            sim_r.isHalt = false;
            }
          else {
            const v1219 = [v1201, v844];
            const v1220 = await txn1.getOutput('Players_joinGame', 'v1219', ctc12, v1219);
            
            const v1228 = stdlib.add(v845, v832);
            const v2989 = v842;
            const v2990 = v843;
            const v2991 = v1197;
            const v2992 = v1228;
            const v2993 = v1205;
            const v2994 = v847;
            const v2996 = v1164;
            const v2997 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Players_makeGuess0_111': {
          const v1355 = v948[1];
          
          break;
          }
        case 'Players_quit0_111': {
          const v1557 = v948[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
  switch (v948[0]) {
    case 'Players_drawFingers0_111': {
      const v951 = v948[1];
      return;
      break;
      }
    case 'Players_joinGame0_111': {
      const v1153 = v948[1];
      undefined /* setApiDetails */;
      const v1164 = stdlib.add(v851, v832);
      ;
      const v1197 = stdlib.add(v844, stdlib.checkedBigNumberify('./index.rsh:166:42:decimal', stdlib.UInt_max, '1'));
      const v1198 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:168:29:decimal', stdlib.UInt_max, '1'));
      const v1199 = ' You are the first one here, Be patient for someone else to connect                                                             ';
      const v1200 = 'The game should start now, you can begin playing                                                                                ';
      const v1201 = v1198 ? v1199 : v1200;
      const v1202 = {
        fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        player_number: v844
        };
      await stdlib.mapSet(map0, v947, v1202);
      const v1203 = stdlib.mod(v844, stdlib.checkedBigNumberify('./index.rsh:56:27:decimal', stdlib.UInt_max, '2'));
      const v1205 = stdlib.Array_set(v846, v1203, v947);
      const v1206 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:178:31:decimal', stdlib.UInt_max, '2'));
      if (v1206) {
        const v1207 = true;
        null;
        const v1208 = [v1201, v844];
        const v1209 = await txn1.getOutput('Players_joinGame', 'v1208', ctc12, v1208);
        if (v588) {
          stdlib.protect(ctc0, await interact.out(v1153, v1209), {
            at: './index.rsh:151:7:application',
            fs: ['at ./index.rsh:151:7:application call to [unknown function] (defined at: ./index.rsh:151:7:function exp)', 'at ./index.rsh:181:10:application call to "k" (defined at: ./index.rsh:165:11:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
            msg: 'out',
            who: 'Players_joinGame'
            });
          }
        else {
          }
        
        const v1217 = stdlib.add(v845, v832);
        const v2980 = v842;
        const v2981 = v843;
        const v2982 = v1197;
        const v2983 = v1217;
        const v2984 = v1205;
        const v2985 = v847;
        const v2987 = v1164;
        const v2988 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
        return;
        }
      else {
        const v1219 = [v1201, v844];
        const v1220 = await txn1.getOutput('Players_joinGame', 'v1219', ctc12, v1219);
        if (v588) {
          stdlib.protect(ctc0, await interact.out(v1153, v1220), {
            at: './index.rsh:151:7:application',
            fs: ['at ./index.rsh:151:7:application call to [unknown function] (defined at: ./index.rsh:151:7:function exp)', 'at ./index.rsh:181:10:application call to "k" (defined at: ./index.rsh:165:11:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
            msg: 'out',
            who: 'Players_joinGame'
            });
          }
        else {
          }
        
        const v1228 = stdlib.add(v845, v832);
        const v2989 = v842;
        const v2990 = v843;
        const v2991 = v1197;
        const v2992 = v1228;
        const v2993 = v1205;
        const v2994 = v847;
        const v2996 = v1164;
        const v2997 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
        return;
        }
      break;
      }
    case 'Players_makeGuess0_111': {
      const v1355 = v948[1];
      return;
      break;
      }
    case 'Players_quit0_111': {
      const v1557 = v948[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Players_makeGuess3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Players_makeGuess3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Players_makeGuess3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Players_drawFingers0_111: ctc8,
    Players_joinGame0_111: ctc9,
    Players_makeGuess0_111: ctc8,
    Players_quit0_111: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const v909 = ctc.selfAddress();
  const v911 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_makeGuess0_111" (defined at: ./index.rsh:234:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'in',
    who: 'Players_makeGuess'
    });
  const v915 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v909), null);
  const v916 = {
    fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v917 = stdlib.fromSome(v915, v916);
  const v918 = v917.player_number;
  const v919 = stdlib.eq(v844, stdlib.checkedBigNumberify('./index.rsh:239:26:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v919, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:239:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_makeGuess0_111" (defined at: ./index.rsh:234:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'Game has not started yet                                                                                                        ',
    who: 'Players_makeGuess'
    });
  const v921 = stdlib.eq(v918, v847);
  stdlib.assert(v921, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:240:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_makeGuess0_111" (defined at: ./index.rsh:234:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'You cannot call now, wait for your turn                                                                                         ',
    who: 'Players_makeGuess'
    });
  const v926 = ['Players_makeGuess0_111', v911];
  
  const txn1 = await (ctc.sendrecv({
    args: [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863, v926],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
      
      switch (v948[0]) {
        case 'Players_drawFingers0_111': {
          const v951 = v948[1];
          
          break;
          }
        case 'Players_joinGame0_111': {
          const v1153 = v948[1];
          
          break;
          }
        case 'Players_makeGuess0_111': {
          const v1355 = v948[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Players_makeGuess"
            });
          ;
          const v1433 = v1355[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
          const v1434 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v947), null);
          const v1435 = {
            fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v1436 = stdlib.fromSome(v1434, v1435);
          const v1437 = v1436.player_number;
          const v1441 = v1436.fingers;
          const v1444 = {
            fingers: v1441,
            guess: v1433,
            player_number: v1437
            };
          await stdlib.simMapSet(sim_r, 0, v947, v1444);
          const v1445 = stdlib.eq(v1437, stdlib.checkedBigNumberify('./index.rsh:255:46:application', stdlib.UInt_max, '1'));
          if (v1445) {
            const v1446 = v846[stdlib.checkedBigNumberify('./index.rsh:120:46:array ref', stdlib.UInt_max, '0')];
            const v1447 = v846[stdlib.checkedBigNumberify('./index.rsh:121:46:array ref', stdlib.UInt_max, '1')];
            const v1448 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1446), null);
            const v1450 = stdlib.fromSome(v1448, v1435);
            const v1451 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1447), null);
            const v1453 = stdlib.fromSome(v1451, v1435);
            const v1454 = v1450.fingers;
            const v1455 = v1450.guess;
            const v1456 = v1453.fingers;
            const v1457 = v1453.guess;
            let v1458;
            const v1459 = stdlib.eq(v1455, v1457);
            if (v1459) {
              v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v1460 = stdlib.add(v1454, v1456);
              const v1461 = stdlib.eq(v1460, v1455);
              if (v1461) {
                v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                const v1463 = stdlib.eq(v1460, v1457);
                if (v1463) {
                  v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v1464 = [v1454, v1456, v1455, v1457, v1458];
            const v1465 = await txn1.getOutput('Players_makeGuess', 'v1464', ctc11, v1464);
            
            const v1476 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v1478 = v1476 ? stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, '0') : v845;
            null;
            if (v1476) {
              const v1501 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:139:37:decimal', stdlib.UInt_max, '0'));
              const v1502 = v1501 ? v1446 : v1447;
              const v1506 = stdlib.sub(v851, v1478);
              sim_r.txns.push({
                kind: 'from',
                to: v1502,
                tok: undefined /* Nothing */
                });
              const v1510 = stdlib.sub(v845, v1478);
              const v3070 = v1458;
              const v3071 = v837;
              const v3072 = v844;
              const v3073 = v1510;
              const v3074 = v846;
              const v3075 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
              const v3077 = v1506;
              const v3078 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
              sim_r.isHalt = false;
              }
            else {
              await stdlib.simMapSet(sim_r, 0, v1446, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 0, v1447, undefined /* Nothing */);
              const v1480 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:139:37:decimal', stdlib.UInt_max, '0'));
              const v1481 = v1480 ? v1446 : v1447;
              const v1485 = stdlib.sub(v851, v1478);
              sim_r.txns.push({
                kind: 'from',
                to: v1481,
                tok: undefined /* Nothing */
                });
              const v1489 = stdlib.sub(v845, v1478);
              const v3079 = v1458;
              const v3080 = v837;
              const v3081 = stdlib.checkedBigNumberify('./index.rsh:144:38:decimal', stdlib.UInt_max, '0');
              const v3082 = v1489;
              const v3083 = v846;
              const v3084 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
              const v3086 = v1485;
              const v3087 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
              sim_r.isHalt = false;
              }}
          else {
            const v1522 = [v842, v844, v844, v844, v844];
            const v1523 = await txn1.getOutput('Players_makeGuess', 'v1522', ctc11, v1522);
            
            const v1534 = stdlib.add(v847, stdlib.checkedBigNumberify('./index.rsh:267:20:decimal', stdlib.UInt_max, '1'));
            const v3088 = v842;
            const v3089 = v843;
            const v3090 = v844;
            const v3091 = v845;
            const v3092 = v846;
            const v3093 = v1534;
            const v3095 = v851;
            const v3096 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Players_quit0_111': {
          const v1557 = v948[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
  switch (v948[0]) {
    case 'Players_drawFingers0_111': {
      const v951 = v948[1];
      return;
      break;
      }
    case 'Players_joinGame0_111': {
      const v1153 = v948[1];
      return;
      break;
      }
    case 'Players_makeGuess0_111': {
      const v1355 = v948[1];
      undefined /* setApiDetails */;
      ;
      const v1433 = v1355[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
      const v1434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v947), null);
      const v1435 = {
        fingers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        guess: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        player_number: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1436 = stdlib.fromSome(v1434, v1435);
      const v1437 = v1436.player_number;
      const v1441 = v1436.fingers;
      const v1444 = {
        fingers: v1441,
        guess: v1433,
        player_number: v1437
        };
      await stdlib.mapSet(map0, v947, v1444);
      const v1445 = stdlib.eq(v1437, stdlib.checkedBigNumberify('./index.rsh:255:46:application', stdlib.UInt_max, '1'));
      if (v1445) {
        const v1446 = v846[stdlib.checkedBigNumberify('./index.rsh:120:46:array ref', stdlib.UInt_max, '0')];
        const v1447 = v846[stdlib.checkedBigNumberify('./index.rsh:121:46:array ref', stdlib.UInt_max, '1')];
        const v1448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1446), null);
        const v1450 = stdlib.fromSome(v1448, v1435);
        const v1451 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1447), null);
        const v1453 = stdlib.fromSome(v1451, v1435);
        const v1454 = v1450.fingers;
        const v1455 = v1450.guess;
        const v1456 = v1453.fingers;
        const v1457 = v1453.guess;
        let v1458;
        const v1459 = stdlib.eq(v1455, v1457);
        if (v1459) {
          v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          }
        else {
          const v1460 = stdlib.add(v1454, v1456);
          const v1461 = stdlib.eq(v1460, v1455);
          if (v1461) {
            v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            const v1463 = stdlib.eq(v1460, v1457);
            if (v1463) {
              v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              v1458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            }
          }
        const v1464 = [v1454, v1456, v1455, v1457, v1458];
        const v1465 = await txn1.getOutput('Players_makeGuess', 'v1464', ctc11, v1464);
        if (v588) {
          stdlib.protect(ctc0, await interact.out(v1355, v1465), {
            at: './index.rsh:235:7:application',
            fs: ['at ./index.rsh:235:7:application call to [unknown function] (defined at: ./index.rsh:235:7:function exp)', 'at ./index.rsh:131:10:application call to "k" (defined at: ./index.rsh:247:18:function exp)', 'at ./index.rsh:256:44:application call to "getWinner" (defined at: ./index.rsh:118:29:function exp)', 'at ./index.rsh:247:18:application call to [unknown function] (defined at: ./index.rsh:247:18:function exp)'],
            msg: 'out',
            who: 'Players_makeGuess'
            });
          }
        else {
          }
        
        const v1476 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v1478 = v1476 ? stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, '0') : v845;
        null;
        if (v1476) {
          const v1501 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:139:37:decimal', stdlib.UInt_max, '0'));
          const v1502 = v1501 ? v1446 : v1447;
          const v1506 = stdlib.sub(v851, v1478);
          ;
          const v1510 = stdlib.sub(v845, v1478);
          const v3070 = v1458;
          const v3071 = v837;
          const v3072 = v844;
          const v3073 = v1510;
          const v3074 = v846;
          const v3075 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
          const v3077 = v1506;
          const v3078 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
          return;
          }
        else {
          await stdlib.mapSet(map0, v1446, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1447, undefined /* Nothing */);
          const v1480 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:139:37:decimal', stdlib.UInt_max, '0'));
          const v1481 = v1480 ? v1446 : v1447;
          const v1485 = stdlib.sub(v851, v1478);
          ;
          const v1489 = stdlib.sub(v845, v1478);
          const v3079 = v1458;
          const v3080 = v837;
          const v3081 = stdlib.checkedBigNumberify('./index.rsh:144:38:decimal', stdlib.UInt_max, '0');
          const v3082 = v1489;
          const v3083 = v846;
          const v3084 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
          const v3086 = v1485;
          const v3087 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
          return;
          }}
      else {
        const v1522 = [v842, v844, v844, v844, v844];
        const v1523 = await txn1.getOutput('Players_makeGuess', 'v1522', ctc11, v1522);
        if (v588) {
          stdlib.protect(ctc0, await interact.out(v1355, v1523), {
            at: './index.rsh:235:7:application',
            fs: ['at ./index.rsh:235:7:application call to [unknown function] (defined at: ./index.rsh:235:7:function exp)', 'at ./index.rsh:261:12:application call to "k" (defined at: ./index.rsh:247:18:function exp)', 'at ./index.rsh:247:18:application call to [unknown function] (defined at: ./index.rsh:247:18:function exp)'],
            msg: 'out',
            who: 'Players_makeGuess'
            });
          }
        else {
          }
        
        const v1534 = stdlib.add(v847, stdlib.checkedBigNumberify('./index.rsh:267:20:decimal', stdlib.UInt_max, '1'));
        const v3088 = v842;
        const v3089 = v843;
        const v3090 = v844;
        const v3091 = v845;
        const v3092 = v846;
        const v3093 = v1534;
        const v3095 = v851;
        const v3096 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
        return;
        }
      break;
      }
    case 'Players_quit0_111': {
      const v1557 = v948[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Players_quit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Players_quit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Players_quit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    fingers: ctc1,
    guess: ctc1,
    player_number: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    Players_drawFingers0_111: ctc9,
    Players_joinGame0_111: ctc8,
    Players_makeGuess0_111: ctc9,
    Players_quit0_111: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const v928 = ctc.selfAddress();
  const v930 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:277:10:application call to [unknown function] (defined at: ./index.rsh:277:10:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_quit0_111" (defined at: ./index.rsh:275:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'in',
    who: 'Players_quit'
    });
  const v932 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v928), null);
  let v933;
  switch (v932[0]) {
    case 'None': {
      const v934 = v932[1];
      v933 = false;
      
      break;
      }
    case 'Some': {
      const v935 = v932[1];
      v933 = true;
      
      break;
      }
    }
  stdlib.assert(v933, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:278:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:277:10:application call to [unknown function] (defined at: ./index.rsh:277:10:function exp)', 'at ./index.rsh:277:10:application call to [unknown function] (defined at: ./index.rsh:277:10:function exp)', 'at ./index.rsh:114:21:application call to "runPlayers_quit0_111" (defined at: ./index.rsh:275:9:function exp)', 'at ./index.rsh:114:21:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
    msg: 'You are not part of the game                                                                                                    ',
    who: 'Players_quit'
    });
  const v939 = ['Players_quit0_111', v930];
  
  const txn1 = await (ctc.sendrecv({
    args: [v831, v832, v837, v842, v843, v844, v845, v846, v847, v851, v863, v939],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:284:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
      
      switch (v948[0]) {
        case 'Players_drawFingers0_111': {
          const v951 = v948[1];
          
          break;
          }
        case 'Players_joinGame0_111': {
          const v1153 = v948[1];
          
          break;
          }
        case 'Players_makeGuess0_111': {
          const v1355 = v948[1];
          
          break;
          }
        case 'Players_quit0_111': {
          const v1557 = v948[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Players_quit"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, v947, undefined /* Nothing */);
          const v1746 = true;
          const v1747 = await txn1.getOutput('Players_quit', 'v1746', ctc5, v1746);
          
          const v1752 = true;
          null;
          const v1755 = stdlib.sub(v844, stdlib.checkedBigNumberify('./index.rsh:294:21:decimal', stdlib.UInt_max, '1'));
          const v3169 = v842;
          const v3170 = v837;
          const v3171 = v1755;
          const v3172 = v845;
          const v3173 = v846;
          const v3174 = v847;
          const v3176 = v851;
          const v3177 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v948], secs: v950, time: v949, didSend: v588, from: v947 } = txn1;
  switch (v948[0]) {
    case 'Players_drawFingers0_111': {
      const v951 = v948[1];
      return;
      break;
      }
    case 'Players_joinGame0_111': {
      const v1153 = v948[1];
      return;
      break;
      }
    case 'Players_makeGuess0_111': {
      const v1355 = v948[1];
      return;
      break;
      }
    case 'Players_quit0_111': {
      const v1557 = v948[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map0, v947, undefined /* Nothing */);
      const v1746 = true;
      const v1747 = await txn1.getOutput('Players_quit', 'v1746', ctc5, v1746);
      if (v588) {
        stdlib.protect(ctc0, await interact.out(v1557, v1747), {
          at: './index.rsh:276:7:application',
          fs: ['at ./index.rsh:276:7:application call to [unknown function] (defined at: ./index.rsh:276:7:function exp)', 'at ./index.rsh:287:10:application call to "k" (defined at: ./index.rsh:285:11:function exp)', 'at ./index.rsh:285:11:application call to [unknown function] (defined at: ./index.rsh:285:11:function exp)'],
          msg: 'out',
          who: 'Players_quit'
          });
        }
      else {
        }
      
      const v1752 = true;
      null;
      const v1755 = stdlib.sub(v844, stdlib.checkedBigNumberify('./index.rsh:294:21:decimal', stdlib.UInt_max, '1'));
      const v3169 = v842;
      const v3170 = v837;
      const v3171 = v1755;
      const v3172 = v845;
      const v3173 = v846;
      const v3174 = v847;
      const v3176 = v851;
      const v3177 = stdlib.add(v949, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '2500'));
      return;
      
      break;
      }
    }
  
  
  };
export async function Players_drawFingers(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Players_drawFingers expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Players_drawFingers expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Players_drawFingers3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Players_informTimeout(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Players_informTimeout expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Players_informTimeout expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Players_informTimeout3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Players_joinGame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Players_joinGame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Players_joinGame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Players_joinGame3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Players_makeGuess(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Players_makeGuess expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Players_makeGuess expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Players_makeGuess3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Players_quit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Players_quit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Players_quit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Players_quit3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Players_drawFingers(uint64)uint64`, `Players_informTimeout()byte`, `Players_joinGame()(byte[128],uint64)`, `Players_makeGuess(uint64)(uint64,uint64,uint64,uint64,uint64)`, `Players_quit()byte`],
    pure: [],
    sigs: [`Players_drawFingers(uint64)uint64`, `Players_informTimeout()byte`, `Players_joinGame()(byte[128],uint64)`, `Players_makeGuess(uint64)(uint64,uint64,uint64,uint64,uint64)`, `Players_quit()byte`]
    },
  appApproval: `BiATAAEDAggZIBDZ9NHAB8T/xoIJtJbwqA2l09u8B5QBKjQ8hAGMARgmBAEAAQEACAAAAAAAAAPIIjUAMRhBBxkqZEkiWzUBIQRbNQIxGSMSQQAKMQAoIQWvZkIG5TYaABdJQQB1IjUEIzUGSSEIDEAAOEkhCQxAAClJIQoMQAAQIQoSRDYaATX/KDT/UEIA3CEJEkQ2GgE1/4ABAjT/UEIAyiEIEkQqQgBMSSELDEAAEiELEkQqNf8pNP9QIQSvUEIAqYGosvdTEkQqNf+AAQM0/1AhBK9QQgCSNhoCFzUENhoDNhoBF0klDEAFdkkkDEAAeCQSRCQ0ARJENARJIhJMNAISEUQoZClkUDUDSTUFNf+ABMiaD7s0/1CwMgY0AyEMWw9EgAkAAAAAAAAG5gGwKTUHNANXACA0AyEGWzQDVygCNAMhDVs0A1cyAjQDIQ5bNAMhD1s0A1dEQDQDIRBbMgY0AyERW0IFQEgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSlcAIDX/IQZbNf5XKAI1/SENWzX8VzICNfshDls1+iEPWzX5V0RANfghEFs19yERWzX2STUFNfWABB4G5rA09VCwMgY0AyEMWwxENPUiVUklDEACI0kkDEAAPCQSRDEAKCEFr2aACQAAAAAAAAbSAbApNQeABdiuGNUBsDT/NP40/TT8NP00+iMJNPk0+DT3MgY09kIEjEg09VcBCDX0IRKvSTXzMQCIBURJNfFXARg08SJVTUk18iEHWzXxMQAoKTTyVwAINPRQNPEWUFBmNPEjEkEBUzT4VwAgNfA0+FcgIDXvNPM08IgFA0k17VcBGDTtIlVNNe408zTviATvSTXsVwEYNOwiVU017TTuIls17DTuIQRbNes07SJbNeo07SEEWzXpNOs06RJBAAYjNehCACU07DTqCEk15zTrEkEABiU16EIAETTnNOkSQQAGIjXoQgADIzXogAgAAAAAAAAFuDTsFjTqFlA06xZQNOkWUDToFlBQsDTsFjTqFlA06xZQNOkWUDToFlA1BzToIxI15zT5IjTnTTXmgAR3SoQeNOcWUQcIUDToFlCwNOdBADWxIrIBNOayCCOyEDTvNPA06CISTbIHszT/NP40/TToNP00+jT5NOYJNPgiMgY09jTmCUIDPDTwKCEFr2Y07yghBa9msSKyATTmsggjshA07zTwNOgiEk2yB7M0/zT+NP006DT9IjT5NOYJNPgiMgY09jTmCUIC+oAIAAAAAAAABfI0/BY0+hZQNPoWUDT6FlA0+hZQULA0/BY0+hZQNPoWUDT6FlA0+hZQNQc0/zT+NP00/DT7NPo0+TT4NPcjCDIGNPZCAqtJIwxAAcdINPY0/gg19DT+iANyNPojCDXzgIABVGhlIGdhbWUgc2hvdWxkIHN0YXJ0IG5vdywgeW91IGNhbiBiZWdpbiBwbGF5aW5nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAEgWW91IGFyZSB0aGUgZmlyc3Qgb25lIGhlcmUsIEJlIHBhdGllbnQgZm9yIHNvbWVvbmUgZWxzZSB0byBjb25uZWN0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTzIxJNNfIxACgpIQevNPoWUFBmNPgiIQY0+iUYC1IxAFA0+CEGSTT6JRgLCIFAUlA18TTzJRJBAD6ABfsMuMgBsIAIAAAAAAAABLg08jT6FlBQsDTyNPoWUDUHNP80/jT9NPw0+zTzNPk0/gg08TT3MgY09EIBFIAIAAAAAAAABMM08jT6FlBQsDTyNPoWUDUHNP80/jT9NPw0+zTzNPk0/gg08TT3MgY09EIA3kg09VcBCDX0IRKvMQCIAZlJNfJXARg08iJVTUk18yEHWzXyNPs08iUYI1Y18TEAKCk09DTzVwgIUDTyFlBQZjTxI1VBACyABbhl5JsBsCs08hZQsDTyFjUHNP80/jT9NPw08TT6NPk0+DT3MgY09kIAbCs08hZQsDTyFjUHNP80/jT9NPw08TT6NPk0+DT3MgY09kIASCISRIGgjQaIARgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULCAAgAANf4xADT/NP4jNP4iIjEAMQBQIjIGIkIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/oHEEwg19DT1NPYWUDT3UDT4FlA0+VA0+hZQNPsWUDT8UDT9FlA0/xZQNPQWUChLAVcAf2cpSwFXfx1nSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghBa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 2,
  stateSize: 156,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v832",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v832",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Players_drawFingers0_111",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_joinGame0_111",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Players_makeGuess0_111",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_quit0_111",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v948",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1763",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T13",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1208",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T13",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1219",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1464",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1522",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1746",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1766",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v968",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "game_state_allFingersSelected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "game_state_over",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "game_state_quit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "game_state_start",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Players_drawFingers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Players_informTimeout",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Players_joinGame",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T13",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T14",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Players_makeGuess",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "internalType": "struct T15",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Players_quit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_fingers",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_guess",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_player_number",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Players_drawFingers0_111",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_joinGame0_111",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Players_makeGuess0_111",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_quit0_111",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v948",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1763",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002b9538038062002b95833981016040819052620000269162000414565b60008055436003556200003862000255565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c341560076200012d565b8051600090819052815160209081019190915280820180513390819052905190910152620000b96200027e565b80513390526020808401515182518201528251825160409081019190915281830180516001905284518151840152805160009201829052805160600182905291840151825160800152815160a00181905281514360c090910152905160e00152620001248162000157565b50505062000613565b81620001535760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160208101909152600081526109c4826020015160c001516200017e9190620004b6565b81526200018a620002a2565b8251516001600160a01b031681528251602090810151818301528351604090810151818401528185018051516060808601919091528151840151608080870191909152825184015160a08088019190915283519092015160c08701528251015160e08087019190915282519091015161010086015290510151610120840152835161014084015260036000554360015551620002299183910162000532565b604051602081830303815290604052600290805190602001906200024f92919062000312565b50505050565b60405180604001604052806200026a620003a1565b815260200162000279620003a1565b905290565b604051806040016040528062000293620003bf565b815260200162000279620003e0565b604080516101608101825260008082526020820152908101620002c4620003a1565b815260200160008152602001620002da620003a1565b81526020016000815260200160008152602001620002f7620003a1565b81526020016000815260200160008152602001600081525090565b8280546200032090620005d6565b90600052602060002090601f0160209004810192826200034457600085556200038f565b82601f106200035f57805160ff19168380011785556200038f565b828001600101855582156200038f579182015b828111156200038f57825182559160200191906001019062000372565b506200039d929150620003fd565b5090565b60405180604001604052806002906020820280368337509192915050565b604080516060810182526000808252602082015290810162000279620003a1565b60405180610100016040528060008152602001620002da620003a1565b5b808211156200039d5760008155600101620003fe565b60008183036040808212156200042957600080fd5b80518082016001600160401b0380821183831017156200045957634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200047357600080fd5b835194506020850191508482108183111715620004a057634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620004d857634e487b7160e01b600052601160045260246000fd5b500190565b8060005b60028110156200024f5781511515845260209384019390910190600101620004e1565b8060005b60028110156200024f5781516001600160a01b031684526020938401939091019060010162000508565b81516001600160a01b031681526101c08101602083015160208301526040830151620005626040840182620004dd565b506060830151608083015260808301516200058160a0840182620004dd565b5060a083015160e083015260c0830151610100818185015260e08501519150610120620005b18186018462000504565b9085015161016085015284015161018084015250610140909201516101a09091015290565b600181811c90821680620005eb57607f821691505b602082108114156200060d57634e487b7160e01b600052602260045260246000fd5b50919050565b61257280620006236000396000f3fe60806040526004361061009a5760003560e01c80633bc5b7bf116100615780633bc5b7bf1461012757806364cca27414610154578063832307571461015c578063870b13d114610171578063ab53f2c614610184578063e2186a08146101a757005b8063163caa9e146100a35780631e93b0f1146100b65780632450f90d146100da5780632a2e6b68146100f25780633709bfaa1461010757005b366100a157005b005b6100a16100b1366004611de0565b6101ba565b3480156100c257600080fd5b506003545b6040519081526020015b60405180910390f35b6100e26101de565b60405190151581526020016100d1565b6100fa61020d565b6040516100d19190611df8565b61011a610115366004611e2e565b610243565b6040516100d19190611e47565b34801561013357600080fd5b50610147610142366004611e99565b610284565b6040516100d19190611ed3565b6100e26102c9565b34801561016857600080fd5b506001546100c7565b6100c761017f366004611e2e565b6102f9565b34801561019057600080fd5b50610199610330565b6040516100d1929190611f1a565b6100a16101b5366004611f77565b6103cd565b6101c2611887565b6101da6101d436849003840184612082565b826103ed565b5050565b60006101e86118c0565b6020810151600090526101f9611887565b6102038282611340565b6020015192915050565b6102156118ef565b61021d611923565b6020810151516001905261022f611887565b61023982826103ed565b6040015192915050565b61024b61193d565b610253611923565b602081018051516002905251516060015183905261026f611887565b61027982826103ed565b606001519392505050565b6102ba60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b6102c382611556565b92915050565b60006102d3611923565b602081015151600390526102e5611887565b6102ef82826103ed565b6080015192915050565b6000610303611923565b6020818101805151600090525151015183905261031e611887565b61032882826103ed565b519392505050565b60006060600054600280805461034590612134565b80601f016020809104026020016040519081016040528092919081815260200182805461037190612134565b80156103be5780601f10610393576101008083540402835291602001916103be565b820191906000526020600020905b8154815290600101906020018083116103a157829003601f168201915b50505050509050915091509091565b6103d5611887565b6101da6103e736849003840184612169565b82611340565b6103fd600360005414600c611664565b815161041890158061041157508251600154145b600d611664565b60008080556002805461042a90612134565b80601f016020809104026020016040519081016040528092919081815260200182805461045690612134565b80156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b50505050508060200190518101906104bb9190612293565b90506104c561196c565b6104d78261014001514310600e611664565b7ff0becf2c06e10ad096070cac44dbd57410f86e65f4cb46eb538f8720909e265e3385604051610508929190612345565b60405180910390a1600060208501515151600381111561052a5761052a611ebd565b141561079357602080850151510151815261054734156008611664565b6020808201805160009081905281519092018290525160400152600161056c33611556565b51600181111561057e5761057e611ebd565b1461058d57806020015161059b565b61059633611556565b604001515b604080830182905260808401519101516105c391906105bc906002906123b5565b6001611689565b60608201908152815151608083018051919091526040808401805160209081015184518201529051820151835183015233600090815260048252829020805460ff19166001908117825593518051948201949094558382015160028201559290910151600390920191909155905101511561075a57604051600181527fda8470605bda44e247b38bed8e3127772c4234877fb33e42ecf723faa4b661db9060200160405180910390a17fabef69ec35ba484783c46c706b2286b96b8f0a454583e4827502410c79364d8a8160400151604001516040516106a591815260200190565b60405180910390a1604080820151015183526106bf611c05565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518385018051919091528582015181519094019390935260a08087015184519093019290925260c08087015184519092019190915260e0808701518451608001526101008701518451909301929092528251439101526101208501519151015261075481611707565b5061133a565b7fabef69ec35ba484783c46c706b2286b96b8f0a454583e4827502410c79364d8a8160400151604001516040516106a591815260200190565b60016020850151515160038111156107ad576107ad611ebd565b1415610b0c5781602001518261012001516107c89190612403565b60a082015260208201516107df9034146009611664565b60018260a001516107f09190612403565b60c0820190815260e0820180517f20596f752061726520746865206669727374206f6e6520686572652c20426520905280517f70617469656e7420666f7220736f6d656f6e6520656c736520746f20636f6e6e6020918201528151621958dd60ea1b604091820152915160006060918201819052610100860180517f5468652067616d652073686f756c64207374617274206e6f772c20796f752063905280516f616e20626567696e20706c6179696e6760801b940193909352825190930183905290510152516001146108c9578061010001516108cf565b8060e001515b610120820152610140810180516000908190528151602090810182905260a08501805184516040908101919091523384526004835292839020805460ff191660019081178255945180519582019590955591840151600280840191909155939092015160039091015560e084015190516109529261094c916123b5565b336117f7565b61016082015260c081015160021415610aa657604051600181527f990be2237f2023c5b28d7d5d2e32fa9ae47728f8c455905658b5923c4ef0fd149060200160405180910390a1610120810151610180820180519190915260a0830151815160200152516040517f15d22bcd3aa474e011ec991dc511d4cbd149e566c73160647488d2cd39f5e5d1916109e491611df8565b60405180910390a161018081015160408401526109ff611c05565b825181516001600160a01b03909116905260208084018051835183015260408086015184518201526060860151838501805191909152608087015181519094019390935260c0808601519351909101929092525190840151610a619190612403565b60208201805160600191909152610160830151815160800152610100840151815160a09081019190915281514360c090910152830151905160e0015261075481611707565b6101208101516101a0820180519190915260a0830151815160200152516040517f55ca9d8fe2dfa90cb79b5029b78fbba8295c485c2564f1f8182c1b6805735f0391610af191611df8565b60405180910390a16101a081015160408401526109ff611c05565b6002602085015151516003811115610b2657610b26611ebd565b14156111c857602084015151606001516101c0820152610b483415600a611664565b6101e08101805160009081905281516020018190529051604001526001610b6e33611556565b516001811115610b8057610b80611ebd565b14610b9057806101e00151610b9e565b610b9933611556565b604001515b6102008201818152905161022083018051919091526101c08301515181516020908101919091528251604090810151835182015233600090815260048352819020805460ff191660019081178255935180518583015592830151600282015591810151600390920191909155915190910151141561109d57600160e0830151610c2e9060005b6020020151611556565b516001811115610c4057610c40611ebd565b14610c5057806101e00151610c65565b60e0820151610c60906000610c24565b604001515b610240820152600160e0830151610c7d906001610c24565b516001811115610c8f57610c8f611ebd565b14610c9f57806101e00151610cb4565b60e0820151610caf906001610c24565b604001515b6102608201819052602090810151610240830151909101511415610cdf576001610280820152610d48565b6102608101515161024082015151610cf79190612403565b6102a08201819052610240820151602001511415610d1c576002610280820152610d48565b80610260015160200151816102a001511415610d3f576000610280820152610d48565b60016102808201525b61024081018051516102c0830180519190915261026083018051518251602090810191909152925183015182516040908101919091529051909201518151606001526102808301518151608001525190517f2035728a1c8335f3f8cf45809abbf4b8c0df9b44b5b85dcd90c7ca5fdd02824a91610dc491611e47565b60405180910390a16102c081015160608401526102808101516001146102e08201819052610df6578160c00151610df9565b60005b6103008201526102e08101516102808201516040517f9e3d9d082b55bfd26bdbfb16606fc8c42062e01fbc82d91e133807bde8e9dca792610e44929015158252602082015260400190565b60405180910390a1806102e0015115610f6f5761028081015115610e705760e082015160200151610e77565b60e0820151515b6001600160a01b03166108fc8261030001519081150290604051600060405180830381858888f19350505050158015610eb4573d6000803e3d6000fd5b50610ebd611c05565b825181516001600160a01b0390911690526020808401518251820152604080850180518451830152610280850151838501805191909152905181519093019290925260a08501519151015261030082015160c0840151610f1d919061241b565b6020820180516060019190915260e08401518151608001528051600060a090910152514360c090910152610300820151610120840151610f5d919061241b565b602082015160e0015261075481611707565b60e082018051516001600160a01b039081166000908152600460209081526040808320805461ffff19908116825560018083018690556002808401879055600393840187905597519094015190951684529083208054909416845590830182905592820181905591015561028081015115610ff25760e082015160200151610ff9565b60e0820151515b6001600160a01b03166108fc8261030001519081150290604051600060405180830381858888f19350505050158015611036573d6000803e3d6000fd5b5061103f611c05565b825181516001600160a01b039091169052602080840151825182015260408085018051845183015261028085015183850180519190915290518151909301929092529051600091015261030082015160c0840151610f1d919061241b565b606080830151610320830180519190915260a084018051825160200152805182516040908101919091528151835190940193909352518151608001525190517fdfd1e3045db5f3d19ca5db92f12a4b8300bceb3743f71325bf71dda13eeda9ee9161110791611e47565b60405180910390a16103208101516060840152611122611c05565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015183850180519190915260808088015182519095019490945260a087015181519093019290925260c086015182519091015260e085015190519091015261010083015161119d90600190612403565b60208201805160a0019190915280514360c090910152610120840151905160e0015261075481611707565b60036020850151515160038111156111e2576111e2611ebd565b141561133a576111f43415600b611664565b336000908152600460209081526040808320805461ffff19168155600180820185905560028201859055600390910193909355519182527f6c9a83a0bc393a6d8e1b2e1d85190222bc400ec6350f15dae7d02065290b6c4e910160405180910390a16001608084018190526040519081527fe7f30cab16970f071d3e8a3ecfe9a797068290f214aab654d21699abdb14637d9060200160405180910390a161129a611c05565b825181516001600160a01b0390911690526020808401518251820152604080850180518451909201919091526060850151828401805191909152905190519091015260a08301516112ed9060019061241b565b6020820180516040019190915260c08085015182516060015260e080860151835160800152610100860151835160a001528251439201919091526101208501519151015261075481611707565b50505050565b6113506003600054146010611664565b815161136b90158061136457508251600154145b6011611664565b60008080556002805461137d90612134565b80601f01602080910402602001604051908101604052809291908181526020018280546113a990612134565b80156113f65780601f106113cb576101008083540402835291602001916113f6565b820191906000526020600020905b8154815290600101906020018083116113d957829003601f168201915b505050505080602001905181019061140e9190612293565b90506114238161014001514310156012611664565b6040805133815284516020808301919091528501515115158183015290517fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e359181900360600190a16114773415600f611664565b604051600181527f2421f8abc49e86e1b54ed40751e784e99a6122ff1c9827e9a23e48319643d8e09060200160405180910390a1600160208301526114ba611c05565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608085015183850180519190915260808087015182519095019490945260a08087015182519094019390935260c08087015182519093019290925260e08087015182519095019490945261010086015181519093019290925281514391015261012084015190519091015261133a81611707565b61158c60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156115bb576115bb611ebd565b1415611654576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156115fc576115fc611ebd565b600181111561160d5761160d611ebd565b81528154610100900460ff16151560208083019190915260408051606081018252600185015481526002850154928101929092526003909301548184015291015292915050565b600080825260208201525b919050565b816101da5760405163100960cb60e01b81526004810182905260240160405180910390fd5b611691611c25565b60005b60028110156116e2578481600281106116af576116af6123d7565b60200201518282600281106116c6576116c66123d7565b91151560209092020152806116da81612432565b915050611694565b50818184600281106116f6576116f66123d7565b911515602090920201529392505050565b6040805160208101909152600081526109c4826020015160c0015161172c9190612403565b8152611736611c43565b8251516001600160a01b031681528251602090810151818301528351604090810151818401528185018051516060808601919091528151840151608080870191909152825184015160a08088019190915283519092015160c08701528251015160e080870191909152825190910151610100860152905101516101208401528351610140840152600360005543600155516117d39183910161249e565b6040516020818303038152906040526002908051906020019061133a929190611cad565b6117ff611c25565b60005b60028110156118595784816002811061181d5761181d6123d7565b6020020151828260028110611834576118346123d7565b6001600160a01b0390921660209290920201528061185181612432565b915050611802565b508181846002811061186d5761186d6123d7565b6001600160a01b0390921660209290920201529392505050565b6040805160a081018252600080825260208201529081016118a66118ef565b81526020016118b361193d565b8152600060209091015290565b6040518060400160405280600081526020016118ea60405180602001604052806000151581525090565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a082018390528152602081019190915290565b6040518060400160405280600081526020016118ea611d31565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60408051610360810190915260006103408201908152819081526020016119ad60405180606001604052806000815260200160008152602001600081525090565b81526020016119d660405180606001604052806000815260200160008152602001600081525090565b81526020016119e3611c25565b8152602001611a0c60405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200160008152602001611a4960408051608081018252600080825260208201819052918101829052606081019190915290565b8152604080516080810182526000808252602082810182905292820181905260608201529101908152604080516080810182526000808252602082810182905292820181905260608201529101908152602001611ac060405180606001604052806000815260200160008152602001600081525090565b8152602001611acd611c25565b8152602001611ada6118ef565b8152602001611ae76118ef565b8152602001611b026040518060200160405280600081525090565b8152602001611b2b60405180606001604052806000815260200160008152602001600081525090565b8152602001611b5460405180606001604052806000815260200160008152602001600081525090565b8152602001611b7d60405180606001604052806000815260200160008152602001600081525090565b8152602001611ba660405180606001604052806000815260200160008152602001600081525090565b8152602001611bcf60405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200160008152602001611bea61193d565b815260006020820181905260408201526060016118ea61193d565b6040518060400160405280611c18611d44565b81526020016118ea611d63565b60405180604001604052806002906020820280368337509192915050565b604080516101608101825260008082526020820152908101611c63611c25565b815260200160008152602001611c77611c25565b81526020016000815260200160008152602001611c92611c25565b81526020016000815260200160008152602001600081525090565b828054611cb990612134565b90600052602060002090601f016020900481019282611cdb5760008555611d21565b82601f10611cf457805160ff1916838001178555611d21565b82800160010185558215611d21579182015b82811115611d21578251825591602001919060010190611d06565b50611d2d929150611d7e565b5090565b60405180602001604052806118ea611d93565b60408051606081018252600080825260208201529081016118ea611c25565b60405180610100016040528060008152602001611c77611c25565b5b80821115611d2d5760008155600101611d7f565b6040805160a081019091528060008152602001611dbc6040518060200160405280600081525090565b81526020016000151581526020016118b36040518060200160405280600081525090565b600060c08284031215611df257600080fd5b50919050565b81518051825260208082015181840152604080830151908401526060918201519183019190915290910151608082015260a00190565b600060208284031215611e4057600080fd5b5035919050565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b6001600160a01b0381168114611e9657600080fd5b50565b600060208284031215611eab57600080fd5b8135611eb681611e81565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160a082019060028110611eea57611eea611ebd565b82526020838101511515818401526040938401518051858501529081015160608401529092015160809091015290565b82815260006020604081840152835180604085015260005b81811015611f4e57858101830151858201606001528201611f32565b81811115611f60576000606083870101525b50601f01601f191692909201606001949350505050565b600060408284031215611df257600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611fc257611fc2611f89565b60405290565b6040516020810167ffffffffffffffff81118282101715611fc257611fc2611f89565b60405160a0810167ffffffffffffffff81118282101715611fc257611fc2611f89565b604051610160810167ffffffffffffffff81118282101715611fc257611fc2611f89565b60006020828403121561204457600080fd5b6040516020810181811067ffffffffffffffff8211171561206757612067611f89565b6040529135825250919050565b8015158114611e9657600080fd5b600081830360c081121561209557600080fd5b61209d611f9f565b8335815260a0601f19830112156120b357600080fd5b6120bb611fc8565b91506120c5611feb565b6020850135600481106120d757600080fd5b81526120e68660408701612032565b602082015260608501356120f981612074565b604082015261210b8660808701612032565b606082015260a085013561211e81612074565b6080820152825260208101919091529392505050565b600181811c9082168061214857607f821691505b60208210811415611df257634e487b7160e01b600052602260045260246000fd5b6000818303604081121561217c57600080fd5b6040516040810181811067ffffffffffffffff8211171561219f5761219f611f89565b604052833581526020601f19830112156121b857600080fd5b6121c0611fc8565b915060208401356121d081612074565b825260208101919091529392505050565b805161165f81611e81565b600082601f8301126121fd57600080fd5b612205611f9f565b80604084018581111561221757600080fd5b845b8181101561223a57805161222c81612074565b845260209384019301612219565b509095945050505050565b600082601f83011261225657600080fd5b61225e611f9f565b80604084018581111561227057600080fd5b845b8181101561223a57805161228581611e81565b845260209384019301612272565b60006101c082840312156122a657600080fd5b6122ae61200e565b6122b7836121e1565b8152602083015160208201526122d084604085016121ec565b6040820152608083015160608201526122ec8460a085016121ec565b608082015260e083015160a08201526101008084015160c083015261012061231686828701612245565b60e084015261016085015191830191909152610180840151908201526101a09092015161014083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061237857612378611ebd565b80604085015250602081015151606084015260408101511515608084015260608101515160a08401526080810151151560c0840152509392505050565b6000826123d257634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612416576124166123ed565b500190565b60008282101561242d5761242d6123ed565b500390565b6000600019821415612446576124466123ed565b5060010190565b8060005b600281101561133a5781511515845260209384019390910190600101612451565b8060005b600281101561133a5781516001600160a01b0316845260209384019390910190600101612476565b81516001600160a01b031681526101c081016020830151602083015260408301516124cc604084018261244d565b506060830151608083015260808301516124e960a084018261244d565b5060a083015160e083015260c0830151610100818185015260e0850151915061012061251781860184612472565b9085015161016085015284015161018084015250610140909201516101a0909101529056fea264697066735822122006f25882fab381b24805b801b3d588d21bc82e35a56201665188b25e1646f39c64736f6c634300080c0033`,
  BytecodeLen: 11157,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:316:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:114:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Players_drawFingers": Players_drawFingers,
  "Players_informTimeout": Players_informTimeout,
  "Players_joinGame": Players_joinGame,
  "Players_makeGuess": Players_makeGuess,
  "Players_quit": Players_quit
  };
export const _APIs = {
  Players: {
    drawFingers: Players_drawFingers,
    informTimeout: Players_informTimeout,
    joinGame: Players_joinGame,
    makeGuess: Players_makeGuess,
    quit: Players_quit
    }
  };
