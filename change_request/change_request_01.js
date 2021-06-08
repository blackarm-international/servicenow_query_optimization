var start = new GlideDateTime();

    var encQuery;
    var grAffectedCi;
    var ciSysId;
    var incidentSysId;
    var ciToTask = {};
    var incidentCi = {};
    encQuery = 'sys_created_on>=javascript:gs.monthsAgo(1)';
    // @ts-ignore
    grAffectedCi = new GlideRecord('task_ci');
    grAffectedCi.addEncodedQuery(encQuery);
    grAffectedCi.query();
    while (grAffectedCi.next()){
        ciSysId = grAffectedCi.ci_item.sys_id.getValue();
        incidentSysId = grAffectedCi.task.sys_id.getValue();
        if (!ciToTask.hasOwnProperty(ciSysId)){
            ciToTask[ciSysId] = [];
        }
        ciToTask[ciSysId].push(incidentSysId);
        incidentCi[grAffectedCi.task.sys_id.getValue()] = true;
    }


var end = new GlideDateTime();

var milliseconds = end.getNumericValue() - start.getNumericValue();
gs.print("start time   - " + start.getNumericValue());
gs.print("end time     - " + end.getNumericValue());
gs.print("milliseconds - " + milliseconds)

//*** Script: start time   - 1623165205464
//*** Script: end time     - 1623165245037
//*** Script: milliseconds - 39573