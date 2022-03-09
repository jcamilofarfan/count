import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto, UpdateCompanyDto } from '../dtos/company.dto';
import { Company } from '../entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepo: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return await this.companyRepo.find();
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.companyRepo.findOne(id);
    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }
    return company;
  }

  async create(data: CreateCompanyDto) {
    const newCompany = this.companyRepo.create(data);
    return this.companyRepo.save(newCompany);
  }

  async update(id: number, changes: UpdateCompanyDto) {
    const company = await this.findOne(id);
    this.companyRepo.merge(company, changes);
    return this.companyRepo.save(company);
  }

  remove(id: number) {
    this.findOne(id);
    return this.companyRepo.delete(id);
  }
}
