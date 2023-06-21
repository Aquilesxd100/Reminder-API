import { DataSource } from "typeorm";
import config from "../config/ormconfig";
import testConfig from "../config/ormTestConfig";

export const dataSource = new DataSource(config);
export const testDataSource = new DataSource(testConfig);