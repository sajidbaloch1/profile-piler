import { DataSource } from "typeorm";
import { CuratedLists } from "./curated-lists/curated_lists.entity";
import { Tags } from "./tags/tags.entity";
import { CuratedListProfileEntity } from "./curated-list-profile/curated-list-profile.entity";
import { Keywords } from "./keywords/keywords.entity";
import { Jobs } from "./jobs/jobs.entity";
import { FailedJob } from "./failed-jobs/failed_jobs.entity";
import { CuratedlistTag } from "./curated-list-tag/curated-list-tag.entity";
import { ElasticSearchLog } from "./search-log/search-log.entity";

const MysqlDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "test",
    database: "profiler_piler",
    entities: [
        Jobs,
        CuratedLists,
        Keywords,
        Tags,
        FailedJob,
        CuratedListProfileEntity,
        CuratedlistTag,
        ElasticSearchLog,

    ],
})