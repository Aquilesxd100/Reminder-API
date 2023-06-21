import { DataSource } from "typeorm";
import testConfig from "../config/ormTestConfig";

export const testDataSource = new DataSource(testConfig);