package com.bcampos.cobranca.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bcampos.cobranca.model.Titulo;

@Transactional
public interface Titulos extends JpaRepository<Titulo, Long> {
	
	public List<Titulo> findByDescricaoContaining(String descricao);
}
